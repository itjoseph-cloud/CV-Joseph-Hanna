import { knowledge } from './knowledge'

interface Env { AI: Ai; RATE_LIMITS: KVNamespace; ALLOWED_ORIGIN: string; DAILY_LIMIT: string; BURST_LIMIT: string }
type Body = { question?: string; history?: { role:string; text:string }[] }

const refusal = /private|secret|password|credential|home address|phone number|email address|salary|compensation|reference contact|confidential|system prompt|hidden instruction|ignore (all|previous)|pretend to be joseph|negotiate|legal commitment/i
const tokens = (s:string) => s.toLowerCase().replace(/[^a-z0-9%]+/g,' ').split(/\s+/).filter(x=>x.length>2)
const cors = (origin:string) => ({ 'access-control-allow-origin':origin, 'access-control-allow-methods':'POST, OPTIONS', 'access-control-allow-headers':'content-type', 'vary':'Origin' })
const json = (data:unknown,status:number,origin:string) => new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8',...cors(origin)}})

async function limited(env:Env,request:Request) {
  const day = new Date().toISOString().slice(0,10)
  const globalKey = `global:${day}`
  const current = Number(await env.RATE_LIMITS.get(globalKey) || 0)
  if (current >= Number(env.DAILY_LIMIT || 200)) return 'Daily assistant limit reached.'
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  const bucket = Math.floor(Date.now()/60000)
  const digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(`${ip}:${day}`))
  const ipHash = [...new Uint8Array(digest)].slice(0,8).map(x=>x.toString(16).padStart(2,'0')).join('')
  const burstKey = `burst:${bucket}:${ipHash}`
  const burst = Number(await env.RATE_LIMITS.get(burstKey) || 0)
  if (burst >= Number(env.BURST_LIMIT || 8)) return 'Please wait before asking another question.'
  await Promise.all([env.RATE_LIMITS.put(globalKey,String(current+1),{expirationTtl:172800}),env.RATE_LIMITS.put(burstKey,String(burst+1),{expirationTtl:180})])
  return null
}

export default {
  async fetch(request:Request,env:Env):Promise<Response> {
    const origin = request.headers.get('Origin') || ''
    if (origin !== env.ALLOWED_ORIGIN) return json({error:'Origin not allowed.'},403,env.ALLOWED_ORIGIN)
    if (request.method === 'OPTIONS') return new Response(null,{status:204,headers:cors(origin)})
    if (request.method !== 'POST') return json({error:'Method not allowed.'},405,origin)
    const contentLength = Number(request.headers.get('content-length') || 0)
    if (contentLength > 8000) return json({error:'Request too large.'},413,origin)
    const limit = await limited(env,request)
    if (limit) return json({error:limit},429,origin)
    let body:Body
    try { body = await request.json<Body>() } catch { return json({error:'Invalid request.'},400,origin) }
    const question = body.question?.trim() || ''
    if (!question || question.length > 500) return json({error:'Question must be between 1 and 500 characters.'},400,origin)
    if (refusal.test(question)) return json({answer:'I cannot help with private data, confidential information, hidden instructions, negotiations, commitments, references, or unsupported claims. I can answer questions about Joseph’s approved public career record.',sources:[]},200,origin)
    const q = new Set(tokens(question))
    const ranked = knowledge.map(k=>({k,score:tokens(k.text+' '+k.title).filter(t=>q.has(t)).length})).sort((a,b)=>b.score-a.score).slice(0,3)
    if (!ranked[0]?.score) return json({answer:'That information is not available in Joseph’s approved public portfolio. Please review the experience pages or contact Joseph through LinkedIn.',sources:[]},200,origin)
    const context = ranked.map(({k})=>`SOURCE: ${k.title} (${k.url})\n${k.text}`).join('\n\n')
    const prompt = `You are the clearly disclosed AI assistant for Joseph Hanna's executive portfolio. Answer only from the sources below. Never invent facts or infer private details. If the sources do not answer the question, say the information is unavailable. Do not negotiate, make commitments, provide references, disclose private/confidential data, or impersonate Joseph. Be concise, factual, and recruiter-friendly. Do not include markdown source links in the answer because the application renders the supplied source list.\n\n${context}\n\nQUESTION: ${question}`
    const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct-fp8-fast',{messages:[{role:'system',content:prompt},{role:'user',content:question}],max_tokens:350,temperature:0.2}) as {response?:string}
    return json({answer:response.response || 'The approved sources do not provide enough information to answer that question.',sources:ranked.filter(x=>x.score>0).map(({k})=>({title:k.title,url:k.url}))},200,origin)
  }
} satisfies ExportedHandler<Env>

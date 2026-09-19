export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="page-head"><div className="shell narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div></section>
}

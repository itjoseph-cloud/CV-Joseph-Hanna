import { describe, expect, it } from 'vitest'
import { caseStudies, credentials, impacts, roles } from '../src/content/site'

describe('public content model', () => {
  it('keeps required content complete and unique', () => {
    expect(roles.length).toBeGreaterThanOrEqual(8)
    expect(caseStudies.length).toBe(6)
    expect(new Set(caseStudies.map(c => c.slug)).size).toBe(caseStudies.length)
    expect(impacts.every(i => i.value && i.category && i.employer && i.context)).toBe(true)
    expect(credentials.education).toHaveLength(4)
  })
  it('contains no unresolved publication placeholders or prohibited contact fields', () => {
    const text = JSON.stringify({ roles, caseStudies, impacts, credentials })
    expect(text).not.toContain('NEEDS JOSEPH CONFIRMATION')
    expect(text).not.toMatch(/@gmail|@yahoo|\b\d{3}[-.) ]\d{3}[- ]\d{4}\b/i)
  })
  it('keeps material metrics connected to employer context', () => {
    expect(impacts.every(i => i.employer.length > 2)).toBe(true)
    expect(caseStudies.every(c => c.outcomes.length > 0 && c.role.length > 0 && c.constraints.length > 0)).toBe(true)
  })
})

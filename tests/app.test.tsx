import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('critical routes', () => {
  it('renders the executive value proposition', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /turn business priorities/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view verified impact/i })).toBeInTheDocument()
  })
  it('renders a case study with verified outcomes', () => {
    render(<MemoryRouter initialEntries={['/case-studies/repipe-netsuite']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: /business-owned netsuite/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /verified outcomes/i })).toBeInTheDocument()
  })
  it('provides a keyboard-addressable privacy choice', () => {
    localStorage.clear()
    render(<MemoryRouter initialEntries={['/privacy']}><App /></MemoryRouter>)
    expect(screen.getByRole('button', { name: /decline analytics/i })).toBeEnabled()
    expect(screen.getByRole('link', { name: /linkedin profile/i })).toBeInTheDocument()
  })
})

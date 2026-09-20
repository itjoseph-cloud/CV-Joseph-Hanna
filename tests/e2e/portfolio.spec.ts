import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { mkdir } from 'node:fs/promises'

test('critical recruiter path and actions work', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { name: /turn business priorities/i })).toBeVisible()
  await page.getByRole('link', { name: /view verified impact/i }).click()
  await expect(page.getByRole('heading', { name: /evidence-led view/i })).toBeVisible()
  await page.getByRole('button', { name: 'Risk' }).click()
  await expect(page.getByText('lower vulnerability exposure')).toBeVisible()
})

test('navigation, download, and AI disclosure are accessible', async ({ page }) => {
  await page.goto('./resume')
  const download = page.getByRole('link', { name: /download pdf/i })
  await expect(download).toHaveAttribute('href', /Joseph_Hanna_Executive_Resume\.pdf/)
  await page.getByRole('button', { name: /ask joseph.*ai assistant/i }).click()
  await expect(page.getByText(/approved public portfolio content/i)).toBeVisible()
  await expect(page.getByText(/no conversation storage/i)).toBeVisible()

  const mobileMenu = page.getByRole('button', { name: 'Open navigation' })
  if (await mobileMenu.isVisible()) await mobileMenu.click()
  await page.getByRole('link', { name: 'Impact', exact: true }).click()
  await expect(page.getByRole('button', { name: /ask joseph.*ai assistant/i })).toBeVisible()
  await expect(page.getByText(/approved public portfolio content/i)).toBeVisible()
})

test('has no obvious missing image alternatives', async ({ page }) => {
  await page.goto('./')
  const images = page.locator('img')
  for (let i = 0; i < await images.count(); i++) await expect(images.nth(i)).not.toHaveAttribute('alt', '')
})

test('has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('./')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations.filter(v => ['serious','critical'].includes(v.impact || ''))).toEqual([])
})

test('captures the approved preview surfaces', async ({ page }, testInfo) => {
  await mkdir('reports/screenshots', { recursive: true })
  await page.goto('./')
  await page.getByRole('button', { name: /decline analytics/i }).click()
  await page.screenshot({ path: `reports/screenshots/${testInfo.project.name}-overview.png`, fullPage: true })
  await page.goto('./case-studies')
  await page.screenshot({ path: `reports/screenshots/${testInfo.project.name}-case-studies.png`, fullPage: true })
})

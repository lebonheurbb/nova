import { test, expect } from '@playwright/test'

test('should display chat interface', async ({ page }) => {
  await page.goto('/')
  
  const mainContainer = page.getByTestId('main-container')
  await expect(mainContainer).toBeVisible()
  
  await page.screenshot({ path: 'test-results/home.png' })
}) 
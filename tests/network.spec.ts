import { test, expect } from './fixtures';

test('le site marche encore meme sans images', async ({ page, loginPage }) => {
  await page.route('**/*.{png,jpg,jpeg,webp}', (route) => route.abort());

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.getByText('Products')).toBeVisible();
});
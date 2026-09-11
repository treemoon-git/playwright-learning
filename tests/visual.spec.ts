import { test, expect } from './fixtures';

test('la page de connexion a toujours la meme apparence', async ({ page, loginPage }) => {
  await expect(page).toHaveScreenshot('page-login.png');
});
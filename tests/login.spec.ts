
import { test, expect } from './fixtures';

test('login avec des identifiants valides', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.getByText('Products')).toBeVisible();
});

test('login avec un mauvais mot de passe', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'mauvais_password');

  await expect(page.getByText('Epic sadface')).toBeVisible();
});

test('ajouter un article au panier', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart('sauce-labs-backpack');

  await expect(inventoryPage.cartLink).toHaveText('1');
});
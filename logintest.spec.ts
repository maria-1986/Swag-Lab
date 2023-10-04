import { test, expect } from '@playwright/test';


test( 'Swag Labs login test', async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[id="user-name"]').click();
    await page.locator('[id="user-name"]').fill('standard_user');

    await page.locator('[id="password"]').click();
    await page.locator('[id="password"]').fill('secret_sauce');

    await page.locator('[id="login-button"]').click();

    await expect(page.getByText('Swag Labs')).toBeVisible;
    await expect(page.getByText('Products')).toBeVisible;
});

import { test, expect, /*Page*/ } from '@playwright/test';

// Serial runs beforeAll first and other tests sequentially, not parallel
// Also remove page contexts in test, so same page from beforeAll is used in all tests
// test.describe.serial('My Account', () => {

test.describe('My Account', () => {

    // let page: Page 

    // test.beforeAll(async ({ browser }) => {

    //     page = await browser.newPage();

    //     await page.goto('/my-account')
    //     await page.locator('#username').fill('practiceuser1')
    //     await page.locator('#password').fill('PracticePass1!')
    //     await page.locator('[value="Log in"]').click()
    //     await expect(page.locator('[class="woocommerce-MyAccount-navigation"] >>  a:has-text("Log out")'))
    //         .toBeVisible();
    // })


    test('Access Orders', async ({ page}) => {

        await page.goto('/my-account')
        await page.locator(`li a[href*='orders']`).click()
        await expect(page).toHaveURL(/.*orders/)
    });

    test('Access Downloads', async ({ page}) => {

        await page.goto('/my-account')
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloads/)
    });

    

});


// MULTIPLE LOGGED IN ROLES

test.describe('Account Page', () => {
    test.use({ storageState: 'notLoggedInState.json' })
  
    test('Verify login and register is visible', async ({ page }) => {
      await page.goto('/my-account')
      await expect(page.locator('form[class*="login"]')).toBeVisible()
      await expect(page.locator('form[class*="register"]')).toBeVisible()
    });
  })

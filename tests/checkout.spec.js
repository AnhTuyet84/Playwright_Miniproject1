import { test, expect } from '../fixtures/test-fixture'
test('check out flow', async ({
    loginPage, 
    productPage,
    cartPage,
    checkoutPage,
    page
}) => {
   
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce')
    await productPage.addProductToCart()
    await productPage.openCart()
    await cartPage.clickCheckOut()
    await checkoutPage.fillCheckoutinfo('user1', 'test', '123456')
    await checkoutPage.continueCheckOut()
    await checkoutPage.finishCheckOut()
    //await page.locator('[data-test="username"]').click();
   // await page.locator('[data-test="username"]').fill('standard_user');
   // await page.locator('[data-test="password"]').click();
   // await page.locator('[data-test="password"]').fill('secret_sauce');
   // await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
})
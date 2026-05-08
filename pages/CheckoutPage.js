export class CheckoutPage {

    constructor(page) {
        this.page = page
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode = page.locator('[data-test="postalCode"]')
        this.continueBtn = page.locator('[data-test="continue"]')
        this.finishBtn = page.locator('[data-test="finish"]')

    }

    async fillCheckoutinfo(fname, lname, zip) {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.postalCode.fill(zip)
       
    }
    async continueCheckOut() {
        await this.continueBtn.click()
    }
    async finishCheckOut() {
        await this.finishBtn.click()
    }


}
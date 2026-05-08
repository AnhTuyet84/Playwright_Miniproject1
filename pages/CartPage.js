export class CartPage {

    constructor(page){
        this.page = page
        this.productName = page.locator('[data-test="item-4-title-link"]')
        this.checkoutBtn = page.locator('[data-test="checkout"]')
        
    }

    async verifyproductVisible(){
        await this.productName.isVisible()
    }
    async clickCheckOut(){
        await this.checkoutBtn.click()
    }

}
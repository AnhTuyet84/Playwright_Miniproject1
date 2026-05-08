export class ProductPage {

    constructor(page){
        this.page = page
        this.addcartbutton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cardicon = page.locator('[data-test="shopping-cart-link"]')
        
    }

    async addProductToCart(){
        await this.addcartbutton.click()
    }
    async openCart(){
        await this.cardicon.click()
    }

}
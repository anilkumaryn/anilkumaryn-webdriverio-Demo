
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class laptopPage {
    /**
     * define selectors using getter methods
     */
    get searchInput  () { return $('//input[@placeholder="Search for products, brands and more"]') }

    get searchBtn  () { return $('//button[@class="L0Z3Pu"]') }

    get laptoplink () { return $('//a[@class="_2whKao"][normalize-space()="Laptops"]')}

    get LTpage () { return $("//h1[normalize-space()='Laptops']") }
    
        async searchInput (name) {
            await (await this.searchInput).setValue(name);
        }
        async searchBtn () {
        await (await this.searchBtn).click();
         }   
        async laptoplink () {
            await (await this.laptoplink).click();
        } 
        async LTpage () {
            await (await this.LTpage).isDisplayed();
        }
}

export default new laptopPage();


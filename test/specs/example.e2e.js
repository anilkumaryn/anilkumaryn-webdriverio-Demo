const LoginPage = require('../../login.page');
const securePage = require('../../secure.page');
//const searchPage = require('../../search.page');
//const searchPage = require('');
//const { searchInput, searchBtn } = require('../../search.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('9945833924', 'qwerty@12345');
        
        await expect(securePage.accountDisplayed).toBeExisting();
        await expect(securePage.accountDisplayed).toHaveTextContaining('Test');
    
        //await expect(securePage.flipkarHomeTitle).toHaveTextContaining(
       //'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    });

    it('it should search and verfiy laptops page',async() => {
        //to search in input filed and verfiy laptops page is displayed 
        const searchInput = await $('//input[@placeholder="Search for products, brands and more"]');
        await searchInput.setValue('Laptops');
       
    
        const searchBtn = await $('//button[@class="L0Z3Pu"]');
        await searchBtn.click();
        const laptops= await $('//h1[normalize-space()="Laptops"]');
        const link= await $('*=Laptops');
        await expect(link).toHaveTextContaining('Laptops');
        await link.click();
        // css selector a[href='/laptops/pr?sid=6bo,b5g&marketplace=FLIPKART']
        await expect(laptops).toHaveTextContaining('Laptops');
    //   await expect(searchPage.searchInput).toHaveTextContaining('laptop')
    });
    it('it should add to cart on searching and selecting Hp laptop',async() =>{
        
        const searchlaptops = await $('//input[@title="Search for products, brands and more"]');
        await searchlaptops.setValue('LapHP 14s Core i3 11th Gen - (8 GB/256 GB SSD/Windows)tops');
        const submitBtn = await $('//button[@type="submit"]');
        await submitBtn.click();

        const hplaptop= await $('//div[contains(text(),"HP 14s Core i3 11th Gen - (8 GB/256 GB SSD/Windows")]');
        await hplaptop.click();
        //browser.getWindowHandle();
        var windowHandles = browser.getWindowHandles()
        console.log(windowHandles);
        

        const addToCart= await $('//button[@class="_2KpZ6l _2U9uOA _3v1-ww"]')
        await addToCart.click();

    });



});
    


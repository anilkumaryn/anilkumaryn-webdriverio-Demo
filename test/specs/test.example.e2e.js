const LoginPage = require('../../login.page');
const securePage = require('../../secure.page');


describe('My Login application', () => {
    it('it should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('9945833924', 'qwerty@12345');
        await browser.maximizeWindow();
        
        await expect(securePage.accountDisplayed).toBeExisting();
        await expect(securePage.accountDisplayed).toHaveTextContaining('Test');
    
        //await expect(securePage.flipkarHomeTitle).toHaveTextContaining(
       //'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    });
 
});
describe('Laptop Page and Product Validations', () => {
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
    it('it should select Hp laptop',async() => {
        
        const searchlaptops = await $('//input[@title="Search for products, brands and more"]');
        await searchlaptops.setValue('14s-dk0093AU');
        const submitBtn = await $('//button[@type="submit"]');
        await submitBtn.click();
        const parentWindow=browser.getWindowHandle();
        console.log(" parentWindow browser id : "+ await parentWindow)
        // const selelaptop = await $('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]');
        // await selelaptop.click();
        
        browser.pause(3000)
        //const addTocart = await $('//button[normalize-space()="ADD TO CART"]');
       // await addTocart.click();
        const hplaptop= await $('//span[normalize-space()="14s-dk0093AU"]');
        await expect(hplaptop).toBeExisting();
    });
   

});
    


describe('My application Logout', () => {
    it('it should logout from Flipkart',async() => {

        const accId = await $('//div[contains(text(),"Test")]');
        await accId.moveTo();
        
        const logout = await $('//div[normalize-space()="Logout"]');
        await logout.click();
        browser.pause(1000);
        const loginpg = await $('//span[@class="_36KMOx"]//span[contains(text(),"Login")]');
        await expect(loginpg).toHaveTextContaining("Login");

    });

});
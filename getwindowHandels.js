
describe('Handling Multiple Windows switching to child window and then switching to parent window back',async ()=> {
    it('should make switching from parent to child and child to parent window', async() => {    
    browser.url('https://www.flipkart.com/')
    var parentWindow = browser.getWindowHandle()
    const hplaptop= await $('//span[normalize-space()="14s-dk0093AU"]');
    await hplaptop.click();
    await browser.pause(3000)
    var ID = await browser.getWindowHandles()
    for(var i = 0; i< ID.length; i++){
        if( awaitID[i]!=await parentWindow){
            await browser.switchToWindow(ID[i])
            await browser.maximizeWindow()
            break;
        }
    }
    await browser.pause(3000)
    await browser.switchToWindow(parentWindow)
    await browser.pause(3000)
})
})
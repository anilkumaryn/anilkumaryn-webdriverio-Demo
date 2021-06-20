
class getWindowHandles { 

    async getWindowHandles() {
    var parentGUID = browser.getWindowHandle();
        var allGUID = browser.getWindowHandles();
    var ID = browser.getWindowHandles();
    browser.pause(3000)
    browser.switchToWindow(parentWindow);
    console.log("window handles are :"+ID)
    var newhandel;
    for(var i = 0; i< ID.length; i++){
        console.log(await ID.length)
        if( await ID[i]!= await parentWindow){
             newhandel=await ID[i];
           // browser.switchToWindow( ID[i])
          //  browser.maximizeWindow()
          
            break;
        }
    }

    console.log("*****"+await newhandel);
    browser.switchToWindow(await ID[1]);
}
    
    



    }

export default new AddToCartPage();
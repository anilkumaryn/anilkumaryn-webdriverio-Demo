const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
   // get flashAlert () { return $('#//div[contains(text(),"My Account")]') }
    get accountDisplayed() {return $('//div[@class="exehdJ"][normalize-space()="Test"]')}
   // get flipkarHomeTitle() {return $('html head title')}
   get flipkarHomeTitle() {return $('//title[contains(text(),"Online Shopping Site for Mobiles, Electronics, Fur")]')}
   
}

module.exports = new SecurePage();

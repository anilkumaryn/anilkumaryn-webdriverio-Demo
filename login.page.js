const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//input[@class="_2IX_2- VJZDxU"]') }
    get inputPassword () { return $('//input[@type="password"]') }
    //get btnSubmit () { return $('button[type="submit"]') }
    get btnSubmit () { return $('//button[@class="_2KpZ6l _2HKlqd _3AWRsL"]') }
    //get btnSubmit () { return $('//button[@type="submit"]//span[contains(text(),"Login")]button[type="submit"]') }
    //get logout() {return $()}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
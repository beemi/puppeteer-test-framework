class AuthenticationPage {

    /**
     * Enter email address in email input field.
     * @param page
     * @param email
     * @returns {Promise<void>}
     * @constructor
     */
    async EnterEmail(page, email) {
        await page.waitForSelector("#email_create", {
            visible: true
        });
        console.log("Create an account page option has been displayed")
        await page.type("#email_create", email);
    }

    /**
     * Click on Create An Account Option.
     * @param page
     * @returns {Promise<void>}
     * @constructor
     */
    async ClickCreateAnAccount(page) {
        await page.click("button[id='SubmitCreate'] span");
    }

}

module.exports = AuthenticationPage;

class HomePage {

    /**
     * Get page title.
     * @param page
     * @returns {Promise<*>}
     */
    async getPageTitle(page) {
        return await page.title(page);
    }

    /**
     * Click on Sign In Option from Home page.
     * @param page
     * @returns {Promise<void>}
     * @constructor
     */
    async ClickOnSignInOption(page) {
        await page.waitForSelector(".login",{timeout: 3000});
        await page.click(".login")
        console.log("User clicks on Login option from home page");
    }
}

module.exports = HomePage;

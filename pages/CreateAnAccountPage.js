const required = require('@small-tech/required')

class CreateAnAccountPage {

    async HasCreateAccountDisplayed(page) {
        await page.waitForSelector("#customer_firstname", {
            visible: true
        });
        console.log("Create An Account page has been displayed");
    }

    /**
     * Enter Personal Information.
     * @param page
     * @param title
     * @param firstName
     * @param lastName
     * @param password
     * @param dateOfBirth
     * @returns {Promise<void>}
     * @constructor
     */
    async EnterPersonalInformation(page = required('page'),
                                   title = required('title'),
                                   firstName = required("firstName"),
                                   lastName = required("lastName"),
                                   password = required("password"),
                                   dateOfBirth = required("dateOfBirth")) {


        //Select title
        if (title === "Mr") {
            await page.click("#id_gender1");
        } else {
            await page.click("#id_gender2");
        }
        // firstname
        await page.type("#customer_firstname", firstName)
        // lastname
        await page.type("#customer_lastname", lastName);
        // password
        await page.type("#passwd", password);
        // DOB
        const dob = dateOfBirth.split("/");
        await page.select("#days", dob[0]);
        await page.select("#months", dob[1]);
        await page.select("#years", dob[2]);
        // Sign up newsletter
        await page.click("#newsletter");
        // offers
        await page.click("#optin");
    }

    /**
     * Enter Address details.
     * @param page
     * @param company
     * @param address
     * @param address2
     * @param city
     * @param state
     * @param zipCode
     * @param mobileNumber
     * @returns {Promise<void>}
     * @constructor
     */
    async EnterYourAddress(page = required("page"),
                           company = required("company"),
                           address = required("address"),
                           address2 = required("address2"),
                           city = required("city"),
                           state = required("state"),
                           zipCode = required("zipCode"),
                           mobileNumber = required("mobileNumber")) {

        await page.type("#company", company);
        await page.type("#address1", address);
        await page.type("#address2", address2);
        await page.type("#city", city);
        await page.select("#id_state", state);
        await page.type("#postcode", zipCode);
        await page.type("#phone_mobile", mobileNumber);
        const aliasElement = page.$('#alias');
        await aliasElement.click({clickCount: 3});
        await aliasElement.type("My Home Test")
    }

    /**
     * Click on Register button.
     * @param page
     * @returns {Promise<void>}
     * @constructor
     */
    async ClickOnRegister(page) {
        await page.click("button[id='submitAccount'] span")
    }


}

module.exports = CreateAnAccountPage;

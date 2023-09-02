import { Locator, Page } from "@playwright/test";

class ContactPage {

    page: Page;
    name: Locator;
    email: Locator;
    phone: Locator;
    message: Locator;
    submitBtn: Locator;
    thanksMsg: Locator;

    constructor(page: Page) { 

        this.page = page;
        this.name = page.locator('.contact-name input');
        this.email = page.locator('.evf-field-email input')
        this.phone = page.locator('//*[@id="evf-277-field_66FR384cge-3-container"]//*[@id="evf-277-field_66FR384cge-3"]')
        this.message = page.locator('#evf-277-field_yhGx3FOwr2-4-container textarea')
        this.submitBtn = page.locator('#evf-submit-277');
        this.thanksMsg = page.locator('[class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]')
    }

    async navigate() { 
        await this.page.goto('/contact');

        // await page.goto('https://practice.sdetunicorns.com/');
        // await page.locator('//*[@id="zak-primary-nav"]//*[@id= "menu-item-493"]').click();
    }

    async submitForm(name, email, phone, message) { 
        await this.name.fill(name);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.message.fill(message);
        await this.submitBtn.click();
    }
}

export default ContactPage;
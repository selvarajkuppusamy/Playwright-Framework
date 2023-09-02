import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Exercise 1', () => {

    let contactPage: ContactPage;

    test('Fill and Submit form in Contact Page', async ({ page }) => {

        contactPage = new ContactPage(page);
        
        // Navigate to Contact Page
        await contactPage.navigate();
        // Verify if we are in Contact Page
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/contact/');
        // Fill the form
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(),
            faker.phone.number(), faker.lorem.paragraphs(2));
        await page.waitForTimeout(3000);
        // Verify the Success Message
        await expect(contactPage.thanksMsg)
            .toHaveText(/Thanks for contacting us! We will be in touch with you shortly/);
    })
   
})
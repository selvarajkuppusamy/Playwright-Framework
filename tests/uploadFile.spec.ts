import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {

    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.navigate();
    })
    

    // REGULAR FILE UPLOAD WHEN INPUT FIELD IS INTERACTIVE via DOM
    test('Should upload a test file', async () => {
    
        // Input File path
        const filePath = path.join(__dirname, '../data/image.png');
        // Upload File
        cartPage.uploadComponent().uploadFile(filePath);
        // Assert
        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
    })
    

    // REGULAR FILE UPLOAD WHEN INPUT FIELD IS NOT EASILY INTERACTIVE
    test('Should upload file via DOM', async ({ page }) => {
        
        const filePath = path.join(__dirname, '../data/image.png');

        // DOM MANIPULATION TO MAKE WEB UN-INTERACTIVE to PROVE THIS TEST
        await page.evaluate(() => { 
            const selector = document.querySelector('input#upfile_1');

            // Type Narrowing to avoid SELECTOR as NULL
            if (selector) { 
                selector.className = '';
            }
        });

        await cartPage.uploadComponent().uploadFile(filePath);
        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully');
    })
    

    // PARAMETRIZE TESTS:
    // Run tests n number of times for n number of different inputs 

    const fileName = ['image.png', 'test-file.txt'];

    for (const file of fileName) { 

        test(`Should upload file ${file}`, async () => {
        
            const filePath = path.join(__dirname, `../data/${file}`);
            cartPage.uploadComponent().uploadFile(filePath);
            await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
        })
    }
    
})


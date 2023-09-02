import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
    test('Open Home Page and Verify Title', async ({ page }) => {
        // ASSERT // Verify Title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.");
    })      
    

    test.skip('Navigate to About Page and Verify URL, Title', async ({ page }) => {

        await homePage.navigate();
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/about/');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site'); 
    })    


    test('Click Get Started button using CSS SELECTOR', async ({ page }) => {

        await expect(page).toHaveURL('https://practice.sdetunicorns.com/');
        await homePage.getStartedBtn.click();
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        // Can also verify with REGEX, if get-started text is available in the URL
        await expect(page).toHaveURL(/.*get-started/);
    }) 


    test('Verify heading text is visible using TEXT SELECTOR', async () => {

        const headingText1 = homePage.headingText;
        await expect(headingText1).toBeVisible();  
    })


    test('Verify Home Link is enabled using TEXT & CSS SELECTOR', async () => {
        
        const homeText = homePage.homeMenu
        await expect(homeText).toBeEnabled();
    })
    

    test('Verify Search ICON is visible using XPATH SELECTOR', async () => {

        const searchIcon = homePage.searchIcon
        await expect(searchIcon).toBeEnabled();
    })


    test('Verify Name for all Menu URLs', async () => {

        const menuNamesList = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        
        // Verify the names usign allTextContents ==> textContent method for single element
        expect(await homePage.getNavLinksText()).toEqual(menuNamesList);

        // ADDITIONAL ITEMS FOR FUN
        // Verify a specific menu item along
        const specificMenuName = homePage.menuList.nth(3);
        // eslint-disable-next-line playwright/prefer-web-first-assertions
        expect(await specificMenuName.textContent()).toEqual(menuNamesList[3]);

        // Verify the FIRST element along
        const firstMenuName = homePage.menuList.first();
        expect(await firstMenuName.textContent()).toEqual(menuNamesList[0]);

        // Verify the LAST element along
        const lastMenuName = homePage.menuList.last();

        expect(await lastMenuName.textContent()).toEqual(menuNamesList[menuNamesList.length - 1]);
        
        // print all the Names that's fetched from website
        // Element Handles give access to all elements inside the variable
        const menuNames = homePage.menuNames
        for (const el of await menuNames.elementHandles()) { 
            console.log(await el.textContent());
        }
        
    })
})







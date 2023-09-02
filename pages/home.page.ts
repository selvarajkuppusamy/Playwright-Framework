import { Page, Locator } from "@playwright/test";

class HomePage { 

    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeMenu: Locator; 
    searchIcon: Locator;
    menuNames: Locator;
    menuList: Locator;


    // LOCATORS ARE PLACED IN CONSTRUCTORS // NOT MANDATORY TO DO IN CONSTRUCTOR THOUGH
    constructor(page: Page) { 
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        // this.headingText = page.locator('text=think different. make different.');           // ' ' is case in-sensitive, " " is case Sensitive.
        this.headingText = page.getByText('Think different. Make different.');           // works too
        this.homeMenu = page.locator('#zak-primary-menu >> text=Home');                         // >> lets adding 2 attributes
        // this.homeMenu = page.locator('#primary-menu:has-text("Home")');                  // Works too
        this.searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
        this.menuNames = page.locator('#zak-primary-nav li[id*=menu]');
        this.menuList = page.locator('#zak-primary-nav li[id*=menu]');
    }


    async navigate() {
        await this.page.goto('/');
    }

    getNavLinksText() { 
        return this.menuNames.allTextContents()
    }

}

export default HomePage;
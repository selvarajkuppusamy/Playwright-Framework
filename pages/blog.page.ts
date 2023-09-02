import { Locator, Page } from "@playwright/test";

class Blog { 

    page: Page;
    blogHeaderElement: Locator;
    recentBlogsElement: Locator;

    constructor(page: Page) { 

        this.page = page;
        this.blogHeaderElement = page.locator('#recent-posts-3 h2');
        this.recentBlogsElement = page.locator('#recent-posts-3 ul li');
    }

    async navigate() { 
        await this.page.goto("/blog");
    }
}

export default Blog;


import { Page } from '@playwright/test';
import UploadComponent from './components/upload.comp';

class CartPage { 
    
    private page: Page;

    constructor(page: Page) { 
        this.page = page;
    }

    async navigate() { 
        await this.page.goto('/cart');
    }

    uploadComponent() { 
        return new UploadComponent(this.page);
    }
}

export default CartPage;
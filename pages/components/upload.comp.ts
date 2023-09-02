import { Locator, Page } from '@playwright/test';

class UploadComponent { 
    
    private page: Page;
    successMessage: Locator;
    submitBtn: Locator;
    uploadInput: string;

    constructor(page: Page) { 
        this.page = page;
        this.uploadInput = 'input[id="upfile_1"]';
        this.submitBtn = page.locator('input[id="upload_1"]');
        this.successMessage = page.locator('[id="wfu_messageblock_header_1_1"]');
        
    }

    async uploadFile(filePath: string) { 
        // Upload File
        await this.page.setInputFiles(this.uploadInput, filePath);
        // Click Submit
        await this.submitBtn.click();
    }
        
        
}

export default UploadComponent; 
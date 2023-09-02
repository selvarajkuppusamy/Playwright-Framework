import { test, expect, ElementHandle } from '@playwright/test';
import Blog from '../pages/blog.page';

test.describe('Blogs', () => {
    
    let blog: Blog;

    test('Recent Blogs', async ({ page }) => {

        blog = new Blog(page);

        // Navigate to Blogs
        await blog.navigate();

        // Verify Recent Post Header
        const blogHeader = await blog.blogHeaderElement.textContent()
        expect(blogHeader).toEqual("Recent Posts")

        // Fetch the DOM element
        const recentBlogs = blog.recentBlogsElement;

        // Assert number of Blogs        
        expect(await recentBlogs.count()).toEqual(5);

        // Element Handles helps to handle all nodes in that element
        const blogs = await recentBlogs.elementHandles()
        for (const _el of blogs as ElementHandle[]) {

            // text Content helps to fetch text from that node
            const textContent = await _el.textContent();
            if (textContent) { 

                expect(textContent.trim().length).toBeGreaterThan(10);    

                // Find name and length of each blog string
                console.log(textContent.trim().length);
                console.log(textContent.trim());    
            }
            
            // DOING BELOW GIVES TS ERROR - as _el possibly a Null
            // expect(((await _el.textContent()).trim()).length).toBeGreaterThan(10);
            // console.log((await _el.textContent()).trim());
            // console.log(((await _el.textContent()).trim()).length);
        }
    })
})

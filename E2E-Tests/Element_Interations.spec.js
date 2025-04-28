import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

})

test("TC01 - Handling Textboxes", async ({page}) => {

    await page.locator("input[id='name']").fill("Joel Andrews Jeyakumar");

    await page.locator("textarea[id='picture']").fill("No. 11, First Floor, Mahalakshmi Complex, North Street, Karumandapam, Trichy - 01");

});

test("TC02 - Handling Buttons", async ({page}) => {

    await page.locator("input[type='submit']").click();

    await page.waitForTimeout(3000);

})

test("TC03 - Handling Links", async ({page}) => {

    await expect(page.getByRole("link", {name: "Selenium Tutorial"})).toBeVisible();

})
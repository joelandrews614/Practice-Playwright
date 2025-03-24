// @ts-check
import { test, expect } from '@playwright/test';

test("Exercise - 1: Take Screenshot of a the webpage", async ({page}) => {
  
  await page.goto("https://valianttinfo.com");
  await page.screenshot({path: "Screenshots/screenshot.jpg"});

})

test("Exercise - 2: File Uploads", async ({page}) => {

  await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
  await page.locator("//input[@id='picture']").setInputFiles("testFiles\\JoelAndrewsJeyakumar_QA_Automation.pdf");

})

test("Exercise - 3: Frame Handling", async ({page}) => {

  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  
  const frame2 = await page.frame({name: 'frm2'});
  if (frame2) {
    await frame2.fill("//input[@id='firstName']", "Joel Andrews Jeyakumar");
  } else {
    console.error("Frame 'frm2' not found");
  }
})

test("Exercise - 4: Outlook", async ({page}) => {

  await page.goto("http://outlook.office.com/");
  
  await page.getByPlaceholder("Email, phone, or Skype").fill("joel@vivyacorp.com");
  
  await page.getByText("Next").click();
  
  await page.locator("//input[@name='passwd']").fill("vrvictory!6");

  await page.locator("//input[@type='submit']").click();

  await page.locator("//input[@type='button']").click();

  await page.locator("(//div[@title='ValianttInfo - 3 items (0 unread)'])[1]").click();

  await page.locator("(//span[@title='testuser@valianttinfo.com'])[1]").click();

  await expect(page.locator("//p[3]//b[1]")).toHaveText("Candidate's Name: k");
})
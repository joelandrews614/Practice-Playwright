// @ts-check
import { test, expect } from '@playwright/test';

test("Exercise - 1: Take Screenshot of a the webpage", async ({page}) => {
  
  await page.goto("https://valianttinfo.com");
  await page.screenshot({path: "Screenshots/screenshot.jpg"});

})

test("Exercise - 2: File Uploads", async ({page}) => {

  

})
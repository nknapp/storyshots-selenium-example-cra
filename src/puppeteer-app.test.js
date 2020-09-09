import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch({headless: true});
})

afterAll(() => browser.close())

test("page matches the snapshot", async () => {
  const page = await browser.newPage();
  await page.setViewport({width: 1024, height: 800});

  await page.goto("http://localhost:3000");

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot({});

  await page.close();
});

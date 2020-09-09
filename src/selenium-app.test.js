import { Builder } from "selenium-webdriver";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

let driver;
beforeAll(() => {
  driver = new Builder()
    .usingServer("http://localhost:4444/wd/hub")
    .withCapabilities({ browserName: "firefox" })
    .build();
}, 20000);

afterAll(() => driver.quit());

test("page matches the selenium-snapshot", async () => {
  await driver.get("http://localhost:3000");
  await driver
    .manage()
    .window()
    .setRect({ x: 0, y: 0, width: 1024, height: 800 });

  const imageBase64 = await driver.takeScreenshot();
  const image = Buffer.from(imageBase64, "base64");

  expect(image).toMatchImageSnapshot();
});

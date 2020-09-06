import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot, waitMillis } from "@knappi/addon-storyshots-selenium";
import { storybookServer } from "./test-utils/storybook-server";
import { reverseTunnel } from "./test-utils/selenium-reverse-tunnel";

const REMOTE_TUNNEL_PORT = 9009;
const STORYBOOK_PORT = 9009;

// This configuration uses chisel to connect to a chisel-server in the docker-selenium container
// in order to create a tunnel a tunnel from the docker-selenium-server to localhost
// The browser then connects to the start of the tunnel (REMOTE_TUNNEL_PORT) which is
// forwarded to the local STORYBOOK_PORT.
//
// * The selenium docker-container must be started. Have a look at the docker-compose.yml
//   in this repo. The used image supports firefox and chrome.
// * `yarn build-storybook` must have been executed before running the tests.
// * `yarn build-storybook -w ` can be used in development to rebuild storybook on changes.
//
//
const tunnel = reverseTunnel({
  host: process.env.SELENIUM_HOST || "localhost",
  tunnelSpec: `R:${REMOTE_TUNNEL_PORT}:localhost:${STORYBOOK_PORT}`,
});

beforeAll(async () => tunnel.start());
afterAll(async () => tunnel.stop());

const server = storybookServer({ port: STORYBOOK_PORT });
beforeAll(async () => server.start(), 60000);
afterAll(async () => server.stop());

initStoryshots({
  framework: "react",
  suite: "All",
  test: imageSnapshot({
    browsers: [
      {
        id: "chrome",
        capabilities: {
          browserName: "chrome",
        },
      },
      {
        id: "firefox",
        capabilities: {
          browserName: "firefox",
        },
      },
    ],
    seleniumUrl: "http://localhost:24444/wd/hub",
    storybookUrl: `http://localhost:${REMOTE_TUNNEL_PORT}`,
    async beforeFirstScreenshot(driver, options) {
      await driver.wait(() => {
        return driver.executeScript(() => {
          const storyview = document.getElementById(
            "storyview"
          ) as HTMLIFrameElement | null;
          return (
            storyview?.contentDocument?.getElementById("root")?.innerHTML !==
            null
          );
        });
      });
      await waitMillis(3000)();
    },
  }),
});

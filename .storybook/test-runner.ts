import { type TestRunnerConfig } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    if (await page.evaluate(() => !("takeSnapshot" in window))) {
      await page.exposeBinding("takeSnapshot", async ({ page }) => {
        const elementHandler = await page.$("#storybook-root");
        const innerHTML = await elementHandler?.innerHTML();
        expect(innerHTML).toMatchSnapshot();
      });
    }

    if (await page.evaluate(() => !("takeScreenshot" in window))) {
      await page.exposeBinding("takeScreenshot", async ({ page }) => {
        const image = await page.locator("#storybook-root").screenshot();
        expect(image).toMatchImageSnapshot();
      });
    }
  },
};

export default config;

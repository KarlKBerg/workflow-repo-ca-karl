import { test, expect } from "@playwright/test";

test.describe("site navigation", () => {
  test("site navigation, venue rendering, and venue loading", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForSelector("#venue-container a");
    await page.locator("#venue-container a >> nth=0").click();
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});

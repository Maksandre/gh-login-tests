import test, { expect } from "@playwright/test";
import { config } from "utils/config";

test("Check configuration works", async ({ page }) => {
  await page.goto(config.BASE_URL);

  const loginPageTitle = page.getByRole("heading", {
    name: "Sign in to GitHub",
  });

  await expect(loginPageTitle).toBeVisible();
});

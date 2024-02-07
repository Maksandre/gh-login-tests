import { Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class LandingPage extends BasePage {
  locators = {
    title: this.page.getByText("Let’s build from here", { exact: true }),
  };

  constructor(page: Page) {
    super(page, "");
  }

  waitLoaded(): Promise<void> {
    return expect(this.locators.title).toBeVisible();
  }
}

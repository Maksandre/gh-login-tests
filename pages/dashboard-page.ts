import { Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class DashboardPage extends BasePage {
  readonly locators = {
    title: this.page.getByRole("link", { name: "Dashboard" }),
    userAvatar: this.page.getByLabel("Open user account menu"),
  };

  constructor(page: Page) {
    super(page, "/dashboard");
  }

  waitLoaded(): Promise<void> {
    return expect(this.locators.title).toBeVisible();
  }
}

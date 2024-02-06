import { Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { Input } from "components/input";

export class LoginPage extends BasePage {
  readonly locators = {
    title: this.page.getByRole("heading", {
      name: "Sign in to GitHub",
    }),
    usernameOrEmail: this.page.getByLabel("Username or email address"),
  };

  readonly loginInput = new Input(this.locators.usernameOrEmail, this.page);

  constructor(page: Page) {
    super(page, "/login");
  }

  waitLoaded(): Promise<void> {
    return expect(this.locators.title).toBeVisible();
  }
}

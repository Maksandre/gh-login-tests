import { Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { Button, ErrorMessageBox, Input } from "components";

export class LoginPage extends BasePage {
  readonly locators = {
    title: this.page.getByRole("heading", {
      name: "Sign in to GitHub",
    }),
    usernameOrEmail: this.page.getByLabel("Username or email address"),
    password: this.page.getByLabel("Password"),
    signIn: this.page.getByRole("button", { name: "Sign in", exact: true }),
    errorBox: this.page.locator("#js-flash-container .flash-error"),
  };

  readonly loginInput = new Input(this.locators.usernameOrEmail, this.page);
  readonly passwordInput = new Input(this.locators.password, this.page);
  readonly signInButton = new Button(this.locators.signIn, this.page);
  readonly errorBox = new ErrorMessageBox(this.locators.errorBox, this.page);

  constructor(page: Page) {
    super(page, "/login");
  }

  waitLoaded(): Promise<void> {
    return expect(this.locators.title).toBeVisible();
  }
}

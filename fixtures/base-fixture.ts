import { test as base } from "@playwright/test";
import { LoginPage } from "pages/login-page";

export const test = base.extend<BaseFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

type BaseFixture = {
  loginPage: LoginPage;
};

export { expect } from "@playwright/test";

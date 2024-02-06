import { test as base } from "@playwright/test";
import { LoginPage } from "pages/login-page";
import { config } from "utils/config";
import { User } from "utils/types";

export const test = base.extend<BaseFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  user: async ({}, use) => {
    await use(config.user);
  },
});

type BaseFixture = {
  loginPage: LoginPage;
  user: User;
};

export { expect } from "@playwright/test";

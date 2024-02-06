import { test as base } from "@playwright/test";
import { DashboardPage } from "pages/dashboard-page";
import { LoginPage } from "pages/login-page";
import { config } from "utils/config";
import { User } from "utils/types";

export const test = base.extend<BaseFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  user: async ({}, use) => {
    await use(config.user);
  },
});

type BaseFixture = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  user: User;
};

export { expect } from "@playwright/test";

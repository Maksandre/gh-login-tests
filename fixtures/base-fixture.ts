import { test as base } from "@playwright/test";
import { LoginPage, DashboardPage, LandingPage } from "pages";
import { config } from "utils/config";
import { User } from "utils/types";

export const test = base.extend<BaseFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  user: async ({}, use) => {
    await use(config.user);
  },
});

type BaseFixture = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  landingPage: LandingPage;
  user: User;
};

export { expect } from "@playwright/test";

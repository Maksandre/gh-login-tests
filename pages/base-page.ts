import { Page } from "@playwright/test";

export abstract class BasePage {
  abstract readonly locators: object;

  constructor(
    protected page: Page,
    protected url: string,
  ) {}

  async goto(url = this.url): Promise<void> {
    await this.page.goto(url);
  }

  async waitForURL(url = this.url) {
    return this.page.waitForURL(url);
  }

  abstract waitLoaded(): Promise<void>;
}

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

  abstract waitLoaded(): Promise<void>;
}

import { Locator, Page, expect } from "@playwright/test";

export abstract class BaseComponent {
  abstract readonly locators: object;

  constructor(
    protected self: Locator,
    protected page: Page,
  ) {}

  click(): Promise<void> {
    return this.self.click();
  }

  shouldBeVisible(): Promise<void> {
    return expect(this.self).toBeVisible();
  }

  shouldBeHidden(): Promise<void> {
    return expect(this.self).toBeHidden();
  }

  shouldBeDisabled(): Promise<void> {
    return expect(this.self).toBeDisabled();
  }

  shouldBeEnabled(): Promise<void> {
    return expect(this.self).toBeEnabled();
  }
}

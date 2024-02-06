import { Locator, Page, expect } from "@playwright/test";

export abstract class BaseComponent {
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

  shouldBeDisabled() {
    return expect(this.self).toBeDisabled();
  }

  shouldBeEnabled() {
    return expect(this.self).toBeEnabled();
  }
}

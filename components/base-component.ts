import { Locator, Page, expect } from "@playwright/test";

export abstract class BaseComponent {
  readonly click = this.self.click.bind(this);

  constructor(
    protected self: Locator,
    protected page: Page,
  ) {}

  shouldBeVisible(): Promise<void> {
    return expect(this.self).toBeVisible();
  }

  shouldBeHidden(): Promise<void> {
    return expect(this.self).toBeHidden();
  }
}

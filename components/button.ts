import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Button extends BaseComponent {
  locators = {};

  constructor(self: Locator, page: Page) {
    super(self, page);
  }

  async shouldHaveText(text: string): Promise<void> {
    return expect(this.self).toHaveText(text);
  }
}

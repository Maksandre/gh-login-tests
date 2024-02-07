import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Input extends BaseComponent {
  locators = {};

  constructor(self: Locator, page: Page) {
    super(self, page);
  }

  fill(text: string): Promise<void> {
    return this.self.pressSequentially(text);
  }

  clear(): Promise<void> {
    return this.fill("");
  }

  pressEnter(): Promise<void> {
    return this.self.press("Enter");
  }

  shouldHaveValue(text: string): Promise<void> {
    return expect(this.self).toHaveValue(text);
  }
}

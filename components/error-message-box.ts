import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class ErrorMessageBox extends BaseComponent {
  locators = {
    closeButton: this.self.getByRole("button"),
    errorLabel: this.self.getByRole("alert"),
  };

  constructor(self: Locator, page: Page) {
    super(self, page);
  }

  shouldHaveText(text: string): Promise<void> {
    return expect(this.locators.errorLabel).toContainText(text);
  }

  close(): Promise<void> {
    return this.locators.closeButton.click();
  }
}

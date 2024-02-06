import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Input extends BaseComponent {
  constructor(self: Locator, page: Page) {
    super(self, page);
  }

  fill(text: string): Promise<void> {
    return this.self.pressSequentially(text);
  }

  clear(): Promise<void> {
    return this.fill("");
  }

  getValue(): Promise<string> {
    return this.self.inputValue();
  }

  pressEnter(): Promise<void> {
    return this.self.press("Enter");
  }
}

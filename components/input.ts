import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class Input extends BaseComponent {
  constructor(self: Locator, page: Page) {
    super(self, page);
  }

  fill(text: string): Promise<void> {
    return this.self.fill(text);
  }

  clear(): Promise<void> {
    return this.fill("");
  }

  value(): Promise<string> {
    return this.self.inputValue();
  }
}

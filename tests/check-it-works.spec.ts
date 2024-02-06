import { test } from "fixtures/base-fixture";

test("Check configuration works", async ({ loginPage, user }) => {
  await loginPage.goto();
  await loginPage.waitLoaded();

  await loginPage.loginInput.fill(user.email);
  await loginPage.passwordInput.fill(user.password);
  await loginPage.signInButton.click();
});

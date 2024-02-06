import { test } from "fixtures/base-fixture";

for (const login of ["email", "username"] as const) {
  test(`User can login with correct ${login} and password`, async ({
    loginPage,
    dashboardPage,
    user,
  }) => {
    await loginPage.goto();
    await loginPage.waitLoaded();

    await loginPage.loginInput.fill(user[login]);
    await loginPage.passwordInput.fill(user.password);
    await loginPage.signInButton.click();

    await dashboardPage.waitLoaded();
  });
}

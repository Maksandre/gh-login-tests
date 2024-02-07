import { test } from "fixtures/base-fixture";

for (const login of ["email", "username"] as const) {
  test(`User can login with correct ${login} and password clicking by "Sign In" button`, async ({
    loginPage,
    dashboardPage,
    user,
  }) => {
    await loginPage.goto();
    await loginPage.waitLoaded();

    await loginPage.loginInput.fill(user[login]);
    await loginPage.passwordInput.fill(user.password);
    await loginPage.signInButton.click();

    // Dashboard page only visible to authorized users
    await dashboardPage.waitLoaded();
  });
}

test("User can login with correct credentials by Enter", async ({
  loginPage,
  dashboardPage,
  user,
}) => {
  await loginPage.goto();
  await loginPage.waitLoaded();

  await loginPage.loginInput.fill(user.email);
  await loginPage.passwordInput.fill(user.password);
  await loginPage.passwordInput.pressEnter();

  // Dashboard page only visible to authorized users
  await dashboardPage.waitLoaded();
});
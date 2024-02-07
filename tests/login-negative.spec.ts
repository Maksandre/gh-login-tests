import { test } from "fixtures/base-fixture";
import { config } from "utils/config";

for (const login of ["email", "username"] as const) {
  test(`User cannot login with correct ${login} and wrong password`, async ({
    loginPage,
    dashboardPage,
    landingPage,
    user,
  }) => {
    const wrongPassword = user.password + "!";

    await loginPage.goto();
    await loginPage.waitLoaded();

    await loginPage.loginInput.fill(user[login]);
    await loginPage.passwordInput.fill(wrongPassword);
    await loginPage.signInButton.click();

    // Error should be visible
    await loginPage.errorBox.shouldBeVisible();
    await loginPage.errorBox.shouldHaveText("Incorrect username or password.");
    // Password should be reset, email filled
    await loginPage.loginInput.shouldHaveValue(user[login]);
    await loginPage.passwordInput.shouldHaveValue("");

    // User cannot visit dashboard page by direct link
    await dashboardPage.goto();
    await landingPage.waitLoaded();
  });
}

test("User cannot login with correct password and wrong login", async ({
  loginPage,
  dashboardPage,
  landingPage,
  user,
}) => {
  const wrongLogin = "x" + user.email;

  await loginPage.goto();
  await loginPage.waitLoaded();

  await loginPage.loginInput.fill(wrongLogin);
  await loginPage.passwordInput.fill(user.password);
  await loginPage.signInButton.click();

  // Error should be visible
  await loginPage.errorBox.shouldBeVisible();
  await loginPage.errorBox.shouldHaveText("Incorrect username or password.");
  // Password should be reset, email filled
  await loginPage.loginInput.shouldHaveValue(wrongLogin);
  await loginPage.passwordInput.shouldHaveValue("");

  // User cannot visit dashboard page by direct link
  await dashboardPage.goto();
  await landingPage.waitLoaded();
});

for (const testCase of [
  {
    describe: "empty login and correct password",
    login: "",
    password: config.user.password,
  },
  {
    describe: "empty password and correct login",
    login: config.user.email,
    password: "",
  },
  {
    describe: "empty password and empty login",
    login: "",
    password: "",
  },
] as const) {
  test(`User cannot login with ${testCase.describe}`, async ({
    loginPage,
    dashboardPage,
    landingPage,
  }) => {
    await loginPage.goto();
    await loginPage.waitLoaded();

    await loginPage.loginInput.fill(testCase.login);
    await loginPage.passwordInput.fill(testCase.password);
    await loginPage.signInButton.click();

    // Error should be visible
    await loginPage.errorBox.shouldBeVisible();
    await loginPage.errorBox.shouldHaveText("Incorrect username or password.");
    // Password should be reset, email filled
    await loginPage.loginInput.shouldHaveValue(testCase.login);
    await loginPage.passwordInput.shouldHaveValue("");

    // User cannot visit dashboard page by direct link
    await dashboardPage.goto();
    await landingPage.waitLoaded();
  });
}

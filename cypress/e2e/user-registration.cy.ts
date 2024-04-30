import { USERS } from "../fixtures/user-data";
import { Homepage } from "../page_objects/home.page";
import { LoginPage } from "../page_objects/login.page";
import { SignupPage } from "../page_objects/signup.page";

const signupPage = new SignupPage();
const loginPage = new LoginPage();
const homepage = new Homepage();

describe("User Registration", () => {
  beforeEach(() => {
    cy.visit(signupPage.signupUrl);
  });
  it("passes when user enters valid user details", () => {
    signupPage
      .fillRegistrationData(
        USERS.validUser.username,
        USERS.validUser.email,
        USERS.validUser.password
      )
      .clickRegisterButton();
    cy.get(signupPage.successModal).should("be.visible");
    cy.url().should("eq", loginPage.loginUrl);
    loginPage
      .fillLoginForm(USERS.validUser.username, USERS.validUser.password)
      .clickLoginButton();
    cy.url().should("eq", homepage.homepageUrl);
  });

  it("shows error message when user enters username which is already taken", () => {
    signupPage
      .fillRegistrationData(
        USERS.invalidUsername.username,
        USERS.validUser.email,
        USERS.validUser.password
      )
      .clickRegisterButton();
    cy.get(signupPage.errorMessage).should("be.visible");
  });
  it("shows error message when user enters incorrect email format", () => {
    signupPage
      .fillRegistrationData(
        USERS.validUser.username,
        USERS.invalidEmail.email,
        USERS.validUser.password
      )
      .clickRegisterButton();
    cy.get(signupPage.errorMessage).should("be.visible");
  });
  it("shows error message when user enters weak password", () => {
    signupPage
      .fillRegistrationData(
        USERS.validUser.username,
        USERS.validUser.email,
        USERS.invalidPassword.password
      )
      .clickRegisterButton();
    cy.get(signupPage.errorMessage).should("be.visible");
  });
});

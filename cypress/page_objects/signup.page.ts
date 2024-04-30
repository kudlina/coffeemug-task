export class SignupPage {
  signupUrl: string = "https://webpage.com/login";

  usernameInput = ".username-input";
  emailInput = ".email-input";
  passwordInput = ".password-input";
  registerButton = ".register-button";
  successModal = ".success-modal";
  errorMessage = ".error-message";

  clickRegisterButton() {
    cy.get(this.registerButton).click();

    return this;
  }

  fillRegistrationData(username: string, email: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);

    return this;
  }
}

export class LoginPage {
  loginUrl = "https://webpage.com/login";
  usernameInput = ".username-input2";
  passwordInput = ".password-input2";
  loginButton = ".login-button";

  fillLoginForm(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);

    return this;
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();

    return this;
  }
}

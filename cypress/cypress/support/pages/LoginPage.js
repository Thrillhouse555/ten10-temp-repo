class LoginPage {

  emailField = '#UserName'
  passwordField = '#Password'
  submitButton = '#login-submit'

    visit() {
      cy.visit('/Account/Login');
    }

    fillUsername(username) {
      cy.get(this.emailField).clear().type(username);
    }

    fillPassword(password) {
      cy.get(this.passwordField).clear().type(password);
    }

    submit() {
      cy.get(this.submitButton).click();
    }

    login(username, password) {
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }

  }
  
  export default new LoginPage();
  
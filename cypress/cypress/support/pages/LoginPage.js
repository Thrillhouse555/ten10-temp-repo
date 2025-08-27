class LoginPage {

  emailField = '#UserName'
  passwordField = '#Password'
  loginButton = '#login-submit'
  logoutButton = '#logout-container button'
  

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
      cy.get(logoutButton).should('be.visible')
      cy.task('logToTerminal', `User: ${username} is logged in`);
    }

    standardLogin() {
      this.visit();
      cy.fixture('users').then((users) => {
      const user = users.standardUser;
      this.login(user.username, user.password);
      });
    }

  }
  
  export default new LoginPage();
  
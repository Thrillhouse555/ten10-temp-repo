import LoginPage from '../../support/pages/LoginPage';
import CalcPage from '../../support/pages/CalcPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.standardLogin();
  });
  afterEach(() => {
    CalcPage.logout();
  });

  it('Login with standard user', () => {
    cy.log('done');
  });


});
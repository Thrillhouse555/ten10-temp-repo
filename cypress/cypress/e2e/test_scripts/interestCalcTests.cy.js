import LoginPage from '../../support/pages/LoginPage';
import CalcPage from '../../support/pages/CalcPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.standardLogin();
  });
  
  afterEach(() => {
    CalcPage.logout();
  });

  it('Confirm error pop up shows when no fields selected', () => {
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('Check interest rate is mandatory', () => {
    CalcPage.durationSelect('Monthly');
    alcPage.consentChecked();
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('Check consent is mandatory', () => {
    CalcPage.interestRate('15%');
    CalcPage.durationSelect('Monthly');
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('It calculates an interest rate', () => {
    CalcPage.interestRate('15%');
    CalcPage.durationSelect('Monthly');
    CalcPage.consentChecked();
    CalcPage.submit();
    CalcPage.interestResult('112.50');
    CalcPage.totalResult('7612.50');
  });


});
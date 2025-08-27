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
    CalcPage.consentChecked();
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('Check slider cannot be 0', () => {
    CalcPage.principal('0')
    CalcPage.interestRate('15%');
    CalcPage.durationSelect('Monthly');
    CalcPage.consentChecked();
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('Check consent is mandatory', () => {
    CalcPage.interestRate('15%');
    CalcPage.durationSelect('Monthly');
    CalcPage.submit();
    CalcPage.alertPopUp('Please fill in all fields.');
  });

  it('It calculates an interest rate when slider and duration not initially touched', () => {
    CalcPage.interestRate('15%');
    CalcPage.consentChecked();
    CalcPage.submit();
    CalcPage.interestResult('3.08');
    CalcPage.totalResult('7503.08');
  });

  it('Test Data - Test Case 1', () => {
    CalcPage.testCase('1');
  });

  it('Test Data - Test Case 2', () => {
    CalcPage.testCase('2');
  });

  it('Test Data - Test Case 3', () => {
    CalcPage.testCase('3');
  });


});
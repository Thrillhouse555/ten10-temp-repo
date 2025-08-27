class CalcPage {

    logoutButton = '#logout-container button'
    loginButton = '#login-submit'
    durationList = '#durationList'
    duractionActive = '.list-group-item.list-group-item-action.active'
    principalSlider = '#customRange1'
    interestRateButton = '#dropdownMenuButton'
    consentCheckbox = '#gridCheck1'
    calcButton = '.btn.btn-primary'
    interestAmount = '#interestAmount'
    totalAmount = '#totalAmount'

    testCase(testcaseID) {
        cy.fixture('testcases').then((testcases) => {
        const testcase = testcases[testcaseID];
        this.calculate(
            testcase.principal, 
            testcase.rate, 
            testcase.duration, 
            testcase.result, 
            testcase.total
            );
        });
    }

    calculate(principal, rate, duration, result, total){
        this.principal(principal);
        this.interestRate(rate);
        this.durationSelect(duration);
        this.consentChecked();
        this.submit();
        this.interestResult(result);
        this.totalResult(total);
    }

    logout() {
        cy.get(this.logoutButton).click();
        cy.get(this.loginButton).should('be.visible')
        cy.task('logToTerminal', `User is logged out`);
    }

    principal(amount) {
        cy.get(this.principalSlider).invoke('val', amount).trigger('input');
    }

    durationSelect(duration) {
        cy.get(this.durationList).find('[data-value="'+ duration + '"]').click({force: true});
        cy.get(this.duractionActive).should('contain', duration);
        cy.task('logToTerminal', `Duration :${duration} has been selected`);
    }

    interestRate(rate) {
        cy.get(this.interestRateButton).click();
        cy.get('[id="rate-' + rate + '"]').click();
        cy.get(this.interestRateButton).should('contain', rate);
        cy.task('logToTerminal', `Interest :${rate} has been selected`);
    }

    consentChecked () {
        cy.get(this.consentCheckbox).click()
    }

    alertPopUp(message) {
        cy.on('window:alert', (text) => {
            expect(text).to.contains(message);
        });
        cy.task('logToTerminal', `Alert window: ${message}`);
    }

    submit() {
        cy.get(this.calcButton).click();
    }

    interestResult(amount) {
        cy.get(this.interestAmount).contains(amount);
        cy.task('logToTerminal', `Interest Amount: ${amount}`);
    }

    totalResult(amount) {
        cy.get(this.totalAmount).contains(amount);
        cy.task('logToTerminal', `Total Amount: ${amount}`);
    }

}

export default new CalcPage();
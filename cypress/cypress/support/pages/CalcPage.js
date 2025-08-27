class CalcPage {

    logoutButton = '#logout-container button'
    loginButton = '#login-submit'
    durationList = '#durationList'
    duractionActive = '.list-group-item.list-group-item-action.active'
    principalSlider = '#customRange1'
    interestRateButton = '#dropdownMenuButton'
    // #rate-9%
    consentCheck = '#gridCheck1'
    calcButton = '.btn.btn-primary'
    interestAmount = '#interestAmount'
    totalAmount = '#totalAmount'

    logout() {
        cy.get(this.logoutButton).click();
        cy.get(loginButton).should('be.visible')
        cy.task('logToTerminal', `User is logged out`);
      }

    durationSelect(duration) {
        cy.get(durationList).find('[data-value="'+ duration + '"]').click();
        cy.get(duractionActive).should('contain', duration);
        // background-color #007bff
        cy.task('logToTerminal', `Duration :${duration} has been selected`);
      }

    alertPopUp(message) {
        cy.on('window:alert', (text) => {
            expect(text).to.contains(message);
            //Please fill in all fields.
        });
    }


}

export default new CalcPage();
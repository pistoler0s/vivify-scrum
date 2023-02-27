class LoginPage{

    get emailInput (){

        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get passwordInput (){

        return cy.get('[type="password"]')
    }

    get submitButton (){

        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    loginUser(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}

export const loginPage = new LoginPage
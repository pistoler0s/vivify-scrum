/// <reference types="cypress" />
import { registerPage } from "./1-getting-started/PageObjects/Registration"
describe("Register Test", () => {
    it('Registration ', () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card/")

        cy.get('[data-cy="sign-up-email-input"]').type("dzonivukovc@yahoo.com")
        cy.get('[type="password"]').type("kukuriku95")
        cy.get('.el-input > [data-cy="sign-up-number-of-users-input"]').type(12)
        
        cy.get('[data-cy="sign-up-submit-button"]').click()
        
})
})
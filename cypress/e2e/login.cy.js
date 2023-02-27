/// <reference types="cypress" />
import { loginPage } from "./1-getting-started/PageObjects/Login"
describe ("Login Test", ()=>{
it("Login" ,()=>{
        cy.visit("https://cypress.vivifyscrum-stage.com/login/")
        cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type("dzonivukovic@yahoo.com")
        cy.get('[type="password"]').type("kukuriku")
        cy.get('.vs-u-text--left > .vs-c-btn').click()
})
})
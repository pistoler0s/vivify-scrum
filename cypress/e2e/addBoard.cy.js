/// <reference types="cypress" />
import { loginPage } from "./1-getting-started/PageObjects/Login"

describe ("Adding Board", ()=>{
    it("Add Board" ,()=>{
        cy.visit ("https://cypress.vivifyscrum-stage.com/my-organizations")
        loginPage.loginUser("dzonivukovic@yahoo.com", "kukuriku")
        cy.get('.vs-c-my-organization__board-new').click()
        cy.get('.vs-input-border > input').type("board")
        cy.get('[name="next_btn"]').click()
        cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check').click()
        cy.get('[name="next_btn"]').click()
        cy.get('[name="next_btn"]').click()
        cy.get('[name="next_btn"]').click()
        cy.get('[name="next_btn"]').click()
    })

    })      
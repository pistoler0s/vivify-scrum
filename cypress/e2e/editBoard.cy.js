/// <reference types="cypress" />
import {loginPage} from "./1-getting-started/PageObjects/Login"

describe ("Edit Board", ()=>{

it ("Edit", ()=>{
cy.visit("https://cypress.vivifyscrum-stage.com/boards/13343")

loginPage.loginUser("dzonivukovic@yahoo.com", "kukuriku")
cy.get('[data-cy="board-trash"] > span > div > .vs-c-site-logo')
})

})
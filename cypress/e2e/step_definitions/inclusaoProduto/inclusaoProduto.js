import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types="cypress" />

Given("que o cliente esteja na tela de detalhe de um produto", () => {
    cy.visit('/')
    cy.get('#speakersImg')
        .should('be.visible')    //Implementamos que o elemento deve estar visível, pois o site está com lentidão
        .click()

    cy.contains('h3','SPEAKERS').should('be.visible')

    cy.get('[class="cell categoryRight"]> ul > :nth-child(3)')
        .should('be.visible')    
        .click()

    cy.get('#Description > h1').invoke('text').as("productName") //Definindo um alias para o nome do produto
})
And("selecione a cor e quantidade desejada", () => {
    cy.get('[ng-show="firstImageToShow"] > .YELLOW')
        .should('be.visible')
        .click()
    cy.get('.plus').click()
})
When("clicar no botão ADD TO CART", () => {
    cy.get('[name="save_to_cart"]')
        .should('be.visible')
        .click()
})
Then("um pop-up no canto superior direito é exibido com o produto inserido no carrinho", () => {
    cy.get('#checkOutPopUp').should('be.visible')
    cy.get('a > h3.ng-binding').should('have.text', 'HP ROAR MINI WIRELESS SPEAKER')
})
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types="cypress" />
Given("que o cliente tenha selecionado algum produto para compra", () => {
    cy.add2SpeakersToCart()
})
When("clicar sobre o ícone do carrinho", () => {
    cy.get('#shoppingCartLink').click()
})
And("clicar no botão CHECKOUT", ()=> {
    cy.get('#checkOutButton').click()
    cy.contains('ORDER PAYMENT').should('be.visible')
})
Then("a tela irá apresentar a lista com os produtos selecionados", () => {
    const productName = Cypress.env('productName') //importando variável criada no comando customizado
    cy.log(productName)  //Não reutilizei ela na validação, pois o outro elemento está com espaços e quebras de linha

    cy.get('#userCart')
        .should('contain', 'HP ROAR MINI WIRELESS SPEAKER') //Então mantive fixo o texto
        .and('be.visible')
    //cy.get('#product > :nth-child(2) > a > h3.ng-binding').invoke('text').then((text) => {
    //    const normalizedText = text.replace(/\s+/g, ' ').trim()
    //    expect(productName).to.equal(normalizedText)
    //})
})
And("todos os produtos irão apresentar a cor e quantidade selecionada no momento da compra", () => {

    cy.get('#product > :nth-child(2) > a > :nth-child(3)')
        .should('be.visible')
        .and('contain','YELLOW')
    cy.get('#product > :nth-child(2) > a > :nth-child(2)')
        .should('contain','2')
        .and('be.visible')
        
})
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types="cypress" />

let produto = "Tablet" // Definindo variável com nome do produto a ser buscado

Given("que o cliente esteja na home do advantageShopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
})
When("clicar na lupa", () => {
    cy.get('#searchSection').click() //Iteração para elemento de busca ser exibido
})
And("pesquisar pelo nome de algum produto", () => {
    cy.get('#autoComplete').type(produto)
    cy.get('#menuSearch').click()

    //Necessário fechar a pesquisa, pois após o enter/click, ela ainda permanece ocupando espaço da tela (bug do site)
    cy.get('.autoCompleteCover > div > img').click()
})
Then("serão retornados apenas os produtos que possuam a literal pesquisada", () => {
    cy.get('#searchResultLabel')
        .should('have.text', ` Search result: "${produto}" `)
        .and('be.visible') //Asserção do título da página de busca
    
    cy.get('[class="cell categoryRight"]> ul')
        .children()
        .should('not.be.empty')
        .and('contain', `${produto}`)
})
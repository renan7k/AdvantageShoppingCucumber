// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('add2SpeakersToCart', () => {
    cy.visit('/')
    cy.get('#speakersImg').click()
    cy.contains('h3','SPEAKERS').should('be.visible')
    cy.get('[class="cell categoryRight"]> ul > :nth-child(3)').click()
    
    //Pegando o texto do produto, e enviando para o arquivo Cypress.env, para ser reaproveitado na validação do carrinho
    cy.get('#Description > h1').invoke('text').then((text) => { 
        Cypress.env('productName', text)
    })

    cy.get('[ng-show="firstImageToShow"] > .YELLOW').click()
    cy.get('.plus').click()

    cy.get('[name="save_to_cart"]').click()
    cy.wait(6000)
})
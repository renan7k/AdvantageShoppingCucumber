import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
/// <reference types="cypress" />

Given("que a API de produtos esteja disponível" , () => {
})
When("realizar uma requisição GET para rota de catálogo de produtos incluindo o parâmetro de nome do produto" , () => {
    //importado o plugin api, que replica o cy.request, porém, executando no modo iterativo, exibe o retorno da chamada
    cy.api({
        method: 'GET',
        url: 'https://advantageonlineshopping.com/catalog/api/v1/products/search?name=LAPTOP'
    }).as("searchApi")
})
Then("a resposta deve ter o statusCode 200" , () => {
    cy.get('@searchApi')
        .its('status')
        .should('equal', 200)
})
And("o retorno deve possuir apenas a lista  com os produtos da categoria pesquisada", () => {
    cy.get('@searchApi')
        .then((response) => {
            expect(response.body).is.not.empty
            expect(response.body).have.length(1)  //Validando que apenas 1 categoria é retornada
            expect(response.body[0].categoryId).to.be.equal(1) //Validando que a única categoria retornada, é a refernte a laptop
            expect(response.body[0].categoryName).to.be.equal("LAPTOPS")

            expect(response.body[0].products).is.not.empty
            expect(response.body[0].products).to.have.length(7) //Validando quantidade de produtos retornados
            expect(response.body[0].products[1]).to.have.property('productName')

            //Setando o array de produto nessa constante, para validar que todos os produtos possuem a literal "Laptop"
            const products = response.body[0] . products
            expect(products).to.be.an('array').that.is.not.empty
            products.forEach((product) => {
                expect(product.productName).to.include('Laptop');
              });
            
        })
})
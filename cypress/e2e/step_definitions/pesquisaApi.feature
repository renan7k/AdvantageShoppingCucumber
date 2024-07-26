Feature: Pesquisar produto por API

Scenario: Efetuar uma requisição GET de busca de produto
Given que a API de produtos esteja disponível
When realizar uma requisição GET para rota de catálogo de produtos incluindo o parâmetro de nome do produto
Then a resposta deve ter o statusCode 200
And o retorno deve possuir apenas a lista  com os produtos da categoria pesquisada
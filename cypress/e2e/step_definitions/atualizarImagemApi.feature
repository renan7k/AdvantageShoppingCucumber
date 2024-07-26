Feature: Atualizar imagem de produto via API

Scenario: Validar atualização de imagem do produto via API com sucesso
Given que a API de produtos esteja disponível
When realizar uma requisição PUT para rota de catálogo de produtos
Then a resposta irá apresentar o statusCode 200
And o produto irá apresentar a nova imagem
And o response irá apresenta o id da imagem atualizado
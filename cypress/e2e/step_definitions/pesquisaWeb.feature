Feature: Pesquisar produto

Scenario: Realize a busca de um produto
Given que o cliente esteja na home do advantageShopping
When clicar na lupa
And pesquisar pelo nome de algum produto
Then serão retornados apenas os produtos que possuam a literal pesquisada
Feature: Inclusão de produtos no carrinho

Scenario: Realize a busca de um produto
Given que o cliente esteja na tela de detalhe de um produto
And selecione a cor e quantidade desejada
When clicar no botão ADD TO CART
Then um pop-up no canto superior direito é exibido com o produto inserido no carrinho
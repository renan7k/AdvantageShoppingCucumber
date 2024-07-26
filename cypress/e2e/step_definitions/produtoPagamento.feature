Feature: Pagamento do produto

Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
Given que o cliente tenha selecionado algum produto para compra
When clicar sobre o ícone do carrinho
And clicar no botão CHECKOUT
Then a tela irá apresentar a lista com os produtos selecionados
And todos os produtos irão apresentar a cor e quantidade selecionada no momento da compra
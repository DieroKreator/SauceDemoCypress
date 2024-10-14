describe('Selecionar Produtos', () => {
  // atributos

  beforeEach(() => {
    cy.visit('/') // abre o browser na url informada em cypress.config.js
  })  // termina before

  it('Selecionar Sauce LAbs BAckpack', () => {

    cy.title()  // Verifica o titulo
        .should('eq', 'Swag Labs')
  
    // realizar login
    cy.get('input[data-test="username"]')
        .type('standard_user')
  
    cy.get('#password')
        .type('secret_sauce')
  
    cy.get('input[name="login-button"]')
        .click()
  
    // Carregar a pagina interna
    cy.get('span.title')
        .should('have.text', 'Products')
  
    cy.get('img[alt="Sauce Labs Backpack"]')
        .click() // clica na imagem de produto54
  
    // carregar a pagina de item de inventário

    // demo xpath absoluto
    cy.xpath('/html/body/div/div/div/div[2]/div[2]/div/button')
        .should('have.text', 'Back to products')

    cy.get('div.inventory_details_name.large_size')
        .should('have.text', 'Sauce Labs Backback')

    cy.get('div.inventory_details_price')
        .should('have.text', '$29.99')

    cy.get('#add-to-cart')
        .click()

    cy.get('a.shopping_cart_link')
        .should('have.text', '1')
  })

})
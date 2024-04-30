export class CartPage {
  addToBasketButton = ".add-to-basket-button";
  basketButton = ".basket-button";
  cartItem = ".cart-item";
  cartList = ".cart-list";

  addProductToCart() {
    cy.get(this.addToBasketButton).click();

    return this;
  }

  navigateToBasket() {
    cy.get(this.basketButton).click();

    return this;
  }
}

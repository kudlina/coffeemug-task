import { CATEGORIES, PRODUCTNAMES } from "../fixtures/categories";
import { CartPage } from "../page_objects/cart.page";
import { Homepage } from "../page_objects/home.page";
import { SearchResultsPage } from "../page_objects/search-results.page";

const homepage = new Homepage();
const searchResultsPage = new SearchResultsPage();
const cartPage = new CartPage();

describe("Product Search & Filtering", () => {
  it("should search for a product related to electronics", () => {
    cy.visit(homepage.homepageUrl);
    homepage.typeInSearchBar(CATEGORIES.electronics).clickSearchButton();

    cy.get(searchResultsPage.heading).should("contain", CATEGORIES.electronics);
    cy.get(searchResultsPage.productCard).should("have.length.greaterThan", 0);
  });
  it("should filter products by category", () => {
    searchResultsPage.clickCategoryFilter();

    cy.get(searchResultsPage.productCard).each(($productCard) => {
      ($productCard as any).should("contain", CATEGORIES.laptop);
    });
  });

  it("should add a product to cart", () => {
    searchResultsPage.selectFirstProduct();
    cartPage.addProductToCart().navigateToBasket();
    cy.get(".cart-item").should("contain", PRODUCTNAMES.macbookAir);
    cy.get(".cart-list").should("have.length.greaterThan", 0);
  });
});

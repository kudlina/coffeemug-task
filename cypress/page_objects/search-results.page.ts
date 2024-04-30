export class SearchResultsPage {
  heading = ".heading";
  productCard = ".product-card";
  laptopsCategoryFilter = ".category-filter-laptops";

  clickCategoryFilter() {
    cy.get(this.laptopsCategoryFilter).click();

    return this;
  }

  selectFirstProduct() {
    cy.get(this.productCard).first().click();
  }
}

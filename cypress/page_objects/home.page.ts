export class Homepage {
  homepageUrl = "https://webpage.com";

  searchBar = "[id=search-bar]";
  searchButton = "[id=search-button]";
  heading = ".heading";
  productCard = ".product-card";

  typeInSearchBar(query: string) {
    cy.get(this.searchBar).type(query);

    return this;
  }

  clickSearchButton() {
    cy.get(this.searchButton).click();

    return this;
  }
}

/* global cy */

describe("Pokedex", function () {
  it("frontpage can be opened", function () {
    cy.visit("/");
    cy.contains("pikachu", { timeout: 10000 }); // espera hasta 10s
    cy.contains("Pokémon and Pokémon character names are trademarks of Nintendo");
  });
});

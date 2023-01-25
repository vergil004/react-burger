/// <reference types="cypress" />

describe("заказ без регистрации", function () {
  beforeEach(() => {
    cy.visit("/");
  });
  it("заказ без регистрации", function () {
    cy.get(".button").contains("Оформить заказ").click();
    cy.get("#modal").should(
      "contain",
      "Для оформления заказа необходима учетная запись"
    );
    cy.wait(1000);
    cy.get("body").type("{esc}");
  });
});

describe("заказ зарегистрированнного пользователя", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" });
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });

    // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie("accessToken", "test-accessToken");
  });
  it("Пустой заказ", function () {
    cy.wait(1000);
    cy.get(".button").contains("Оформить заказ").click();
    cy.get("#modal").should("contain", "Булки добавь!!!");
    cy.get("[class^=modal_modal__close__]").click();
  });
  it("Клик по ингредиенту", function () {
    let element = cy.get("section").contains("Булки").get("ul li:first");
    element.click();
    cy.get("#modal").should("contain", "Краторная булка N-200i");
    cy.get("[class^=modal_modal__close__]").click();
  });
  it("Перетаскивание ингредиента", function () {
    let element = cy.get("section").contains("Булки").get("ul li:first");
    let elementtwo = cy.get("section").contains("Начинки").get("ul li").eq(4);
    let elementrhree = cy.get("section").contains("Соусы").get("ul li").eq(2);
    let container = cy.get("[class^=burger-constructor_burgerConstructor__]");
    element.trigger("dragstart");
    container.eq(0).trigger("drop");
    elementtwo.trigger("dragstart");
    container.eq(0).trigger("drop");
    elementrhree.trigger("dragstart");
    container.eq(0).trigger("drop");
    cy.wait(1000);
    cy.intercept("POST", "api/orders", { fixture: "order.json" });
    cy.get(".button").contains("Оформить заказ").click();
    cy.get("#modal").should("contain", "123");
  });
});

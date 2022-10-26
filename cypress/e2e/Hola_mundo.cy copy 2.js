
describe ("Bienvenido al curso de Cypress seccion 1",() => {

    it("Mi primer Test -> Hola mundo", () => {
         cy.log("Hola mundo")
         cy.wait(3000)
    })

    it("Segundo test -> campo name", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")   //visit nos dice la pagina que va a visitar 

        cy.get("#wsf-1-field-21").type("Wilmer") 
        cy.wait(1000)
        cy.get("#wsf-1-field-22").type("Toro")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").type("wtoroloz@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("3014125201")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").type("Demo de la direccion")
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)

        
    })

}) // Cierre de describe
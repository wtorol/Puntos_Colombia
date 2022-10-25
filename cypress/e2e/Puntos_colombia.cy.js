///<reference types="Cypress"/>   


require('cypress-plugin-tab')
require('cypress-xpath')


describe(" ", () => {
    let tiempo = 1000;  // definir variable para tiempo de espera
    let password = "MiContraseña";  // variable para definir contraseña
    let email = "wilmertrader2@gmail.com4";  // variable para elegir el correo a registrar 

    before(() => {
        cy.visit("https://www.todotest.com/")
        cy.title().should('eq', 'TodoTest - Test autoescuela gratis. 2500 tests autoescuelas para carnet de conducir')
        cy.wait(tiempo)
        cy.xpath("//a[@href='/personal/registre.asp']").should("be.visible").click()  // click en registro 
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it("Datos Personales", () => {
       

        //Datos personales        
        cy.get('#email').should('be.visible').type(email) //email
        cy.get('#cp').should('be.visible').type("50002")   //codigo postal
        cy.get('#tel').should('be.visible').type("3014125201")      //telefono
        cy.wait(tiempo)

    })

    it("Conocerte mejor", () =>{
        //Ayudanos a conocerte mejor
        cy.xpath("//label[@for='tie_ex_a'][contains(.,'En menos de 3 meses.')]").click()
        cy.get(':nth-child(6) > [style="padding-top:5px;"] > .spr').click()
        cy.get(':nth-child(8) > [style="padding-top:5px;"] > .spr').should("be.visible").click()
        cy.wait(tiempo)

    })

    it("Permiso ", () =>{
        //El permiso que quieres obtener
        cy.get('#perm').should("be.visible").select("B (Turismo)")
        cy.get('#lib_si_div > .spr').should("be.visible").click()

        // contraseña
        cy.get('#contra').should("be.visible").type(password).tab().type(password)
        cy.get('[style="max-width: 600px;margin: 0px auto 20px auto;"] > .checkbox > .spr').should("be.visible").click()
        cy.wait(tiempo)
        //aceptar terminos y condiciones
        cy.get('#pubon_div > .spr').should("be.visible").click()
        
        cy.get('#bot_reg').should("be.visible").click()
            
        cy.wait(tiempo)
    })


}) // Cierre de describe
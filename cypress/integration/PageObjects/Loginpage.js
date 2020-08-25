import { cyan } from "color-name";

class LoginPage
 {
    visit() {
        cy.visit(" https://demo.nopcommerce.com/login")
    }

    FieldEmail(value) 
    {
        const field = cy.get('[id=Email]')
        field.clear()
        field.type(value)
        return this

    }
     
    FieldPassword(value)
    {
        const field = cy.get('[id=Password]')
        field.clear()
        field.type(value)
        return this


    }

    submit()
    {

        cy.get('.login-button').click();


    }

    Logout()
    {
        cy.get('.ico-logout').click();
    }



}


export default LoginPage
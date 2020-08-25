


class Registrationpage
{
   visit() {
       cy.visit(" https://demo.nopcommerce.com/register")
   }

   FieldGendermale()
   {
        cy.get('[id=gender-male]').click()
   }

    //<-------This is for Gender Female---------------->//
    //    FieldGenderfemale(value)
    //     {
    //        const field = cy.get('[id=gender-female]')
    //        field.clear()
    //        field.type(value)
    //        return this
    //    } 


   FieldFirstName(string)
   {
    const field = cy.get('[id=FirstName]')
    field.clear()
    field.type(string)
    return this

   }

   FieldLastName(string)
   {
    const field = cy.get('[id=LastName]')
    field.clear()
    field.type(string)
    return this
   }

   FieldDay()
   {
    cy.get('[name=DateOfBirthDay]').select('6')
   }

   FieldMonth()
   {
    cy.get('[name=DateOfBirthMonth]').select('6')
    
   }
   FieldYear(value)
   {
    const field = cy.get('[name=DateOfBirthYear]').select('1995')
   
   }

   FieldEmail(string)
   {
    const field = cy.get('[id=Email]')
    field.clear()
    field.type(string)
    return this
   }

   FieldPassword(string)
   {
    const field = cy.get('[id=Password]')
    field.clear()
    field.type(string)
    return this
   }


   FieldConfirmPassword(string)
   {
    const field = cy.get('[id=ConfirmPassword]')
    field.clear()
    field.type(string)
    return this
   }
   Register()
   {
    cy.get('[id=register-button').click()
   
   }
}

export default Registrationpage
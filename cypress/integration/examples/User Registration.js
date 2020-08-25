


import Registrationpage from '../PageObjects/Registrationpage'
import { cyan } from 'color-name'


describe('Users Registration', function () {
 
   beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('/UserRegistration.csv').then(function(data) {
          this.data=data
        })
    })

    it('Users Successful Registration', function () 
    {
      
       const UserRegistration = new Registrationpage()
       UserRegistration.visit()
       UserRegistration.FieldGendermale()
       UserRegistration.FieldFirstName(this.FirstName)
       UserRegistration.FieldLastName(this.LastName)
       UserRegistration.FieldDay()
       UserRegistration.FieldMonth()
       UserRegistration.FieldYear()
       UserRegistration.FieldEmail(this.Email)
       UserRegistration.FieldPassword(this.Password)
       UserRegistration.FieldConfirmPassword(this.ConfirmPassword)
       UserRegistration.Register()
    
    })
  })
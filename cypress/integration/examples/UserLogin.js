

import Loginpage from '../PageObjects/Loginpage'
import { cyan } from 'color-name'

describe('Users Login', function () {
 
   beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('/UserLogin.csv').then(function(data) {
          this.data=data
        })
    })

    it('Users Successful login', function () 
    {
      
       const UserLogin = new Loginpage()
       UserLogin.visit()
       UserLogin.FieldEmail(this.Email)
       UserLogin.FieldPassword(this.Password)
       UserLogin.submit()
       UserLogin.Logout()
    
    })

   })
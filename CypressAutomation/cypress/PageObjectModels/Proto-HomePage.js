class HomePage{

 PageUrl(){
    return cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
 }

AssertUrl(){
    return cy.url().should('includes','https://rahulshettyacademy.com/angularpractice/')
}

Username(){
    cy.get('[name="name"]').eq(0).type('testuser')
}

EmailAddress(){
    cy.get('[name="email"]').type('vprabu1702@gmail.com')
}

Password(){
    cy.get('#exampleInputPassword1').type('789109')
}
Checkbox(){
    cy.get('#exampleCheck1').check().should('be.checked')
}

ConfirmGender(){
    cy.get('#exampleFormControlSelect1').select('Male').should('have.value','Male')
}
Radiobutton(){
    cy.get('#inlineRadio1').check().should('be.checked')
}

DOB(){
    cy.get('input[type="date"]').type('1999-10-06')
}
Submit(){
    cy.get('input[type="submit"]').click()
}

AlertCheck(){
    cy.get('.alert').should('includes','Success!')
}

}
export default HomePage
class ShopPage{
 Shop(){
    cy.get('a[class="nav-link"]').eq(1) .click()
    cy.wait(4000);
 }
 AddItems(){
   cy.get('app-card .card').each(($mobiles)=>{
      if($mobiles.text().includes('iphone')){
         cy.wrap($mobiles).find('button').click()
      }
      if($mobiles.text().includes('Samsung')){
         cy.wrap($mobiles).find('button').click()
      }
   })
}
  CheckOut(){
   cy.wait(5000)
   //cy.get('#navbarResponsive').should('have.text','checkout')
   cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('have.visible').click()
   }
   
  }export default ShopPage
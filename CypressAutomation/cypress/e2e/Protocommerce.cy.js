///<reference types="cypress" />
import HomePage from "../PageObjectModels/Proto-HomePage"
import ShopPage from "../PageObjectModels/ShopPage";
import CheckoutPage from "../PageObjectModels/CheckoutPage";

describe('protocommerce',()=>{
    it('protocommerce test',()=>{

        //Homepage 
        const homepage = new HomePage()
        homepage.PageUrl();
        homepage.AssertUrl();
        homepage.Username();
        homepage.EmailAddress();
        homepage.Password();
        homepage.Checkbox();
        homepage.ConfirmGender();
        homepage.Radiobutton();
        homepage.DOB();
        homepage.Submit();
        //homepage.AlertCheck();

        //Shop-page ...
        const shoppage = new ShopPage()
        shoppage.Shop();
        shoppage.AddItems();
        shoppage.CheckOut();

        //Checkout Page...
        const checkoutpage = new CheckoutPage()
        checkoutpage.AddItems();
        checkoutpage.ComparingValues();
        
        cy.get('checkbox checkbox-primary').check().should('be.checked')
        cy.get('#country').type('in')
        cy.wait(4000)
        cy.get('.suggestions').each(($country)=>{
            if($country.text().includes('India')){
                cy.wrap($country).click( {force: true})
            }
        }) 
    })
    
})


        //Checking the total price...
        //checkoutpage.TotalPrice(sum);

     
     
     
     
    
     //
    //  cy.wait(4000)

 
     //cy.get('div a[aria-label="close"]').should('includes','Success! The Form has been submitted successfully!.')
     //
    //  cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    //  cy.url().should('includes','https://rahulshettyacademy.com/angularpractice/shop')
    // //  cy.wait(5000)
    //  //cy.get(':nth-child(1) > .card > .card-footer > .btn').click()//automatic
    //  cy.get('div button ').eq(1).click()
    //  cy.get('div button ').eq(2).click()
    // //  cy.wait(5000)
    //  cy.get('[class="nav-link btn btn-primary"]').should('be.visible').click()
    // //  cy.wait(5000)
    //  let sum=0;
    //  cy.get('table tr:nth-child(1) td:nth-child(4)').each(($price1)=>{
    //     if(($price1).text().includes('100000')){
    //         cy.wrap($price1).then((cellText)=>{
    //             const data=cellText.text()
    //             const iphone=parseInt(data.replace("₹. ", ""))
    //             cy.log(iphone)
    //             sum=sum+iphone
    //             cy.log(sum)
    //         })
    //     }
    //  })
    //  cy.get('table tr:nth-child(2) td:nth-child(4)').each(($price2)=>{
    //     if(($price2).text().includes('85000')){
    //         cy.wrap($price2).then((dataText)=>{
    //             const data1=dataText.text()
    //             const samsung=parseInt(data1.replace("₹. ", ""))
    //             cy.log(samsung)
    //             sum=sum+samsung
    //             cy.log(sum)
    //         })
    //     }
    //  })
     
  
   

    //  cy.get('#checkbox2').check({force: true} ).should('be.checked')
    // cy.get('.btn.btn-success.btn-lg').should('be.visible').click( {force: true})
    // cy.get('div>strong').should('have.text','Success!')
    // cy.screenshot("ProtoCommerce")


     

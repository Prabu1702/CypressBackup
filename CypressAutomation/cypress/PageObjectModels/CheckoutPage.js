class CheckoutPage{
    AddItems(){

        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($prices)=>{
            cy.log($prices.text())

            //Splitting string to integer...
            var initial = $prices.text();
            var split = initial.split('');

            //Removing inr symbol...
            var value = split[1].trim();

            //Adding all the prices...
            sum = parseInt(sum)+parseInt(value)
            }).then(()=>{
                cy.log(sum)
        })
    }

    ComparingValues(){
  
        cy.get('.text-right').each(($prices)=>{
            if(($prices).text().includes('185000')){
                cy.wrap($prices).then((dataText1)=>{
                    const Total=dataText1.text()
                    const tot=parseInt(Total.replace("₹. ", ""))
                    cy.log(tot)
                    expect(sum).to.equal(tot)
                })
            }
         })
    }


}export default CheckoutPage
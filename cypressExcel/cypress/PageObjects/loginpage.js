class Login {
    constructor() {
         this.email = "input[name=username]";
         this.password = "input[type=password]"; 
         this.submit = "button[type=submit]";
    }
     get Username() {
         return cy.get(this.email);
     }
     get Password() {
         return cy.get(this.password);
     }
     get SubmitButton() {
         return cy.get(this.submit); 
     }
  }
const login = new Login();
export default login;
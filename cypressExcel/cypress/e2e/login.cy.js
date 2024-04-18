import login from "../PageObjects/loginpage";
describe("Working with cy.task()", function() {
  
  
    it.only("Login Test - Task - generateJSONFromExcel", function() {
      cy.visit('/')
      const excelFilePath = "E:\Cypress\cypress\cypressExcel\cypress\fixtures\login.xlsx";
      const sheetName = "TestData";
      
      cy.task("generateJSONFromExcel", { excelFilePath, sheetName     }).then(
        (user) => {
          cy.wait(5000)
          login.Username.type(user[0].email);
          login.Password.type(user[0].password);
        }
      );
login.SubmitButton.click();
      
    });
  
  });
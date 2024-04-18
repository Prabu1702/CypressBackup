const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
module.exports = defineConfig({
e2e: {
    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
    setupNodeEvents(on, config) {
    
    on('task', {
       generateJSONFromExcel: generateJSONFromExcel
    })
       return config;

// Convert Excel To JSON
function generateJSONFromExcel(agrs) {
 const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
 const ws = wb.Sheets[agrs.sheetName]; 
 return xlsx.utils.sheet_to_json(ws, { raw: false });
}},
experimentalModifyObstructiveThirdPartyCode: true
},
//Display insecure content - Navigate to any superdomain without cross-origin errors.
chromeWebSecurity: false,
});

// const xlsx = require("node-xlsx").default;
// const fs = require("fs"); // for file
// const path = require("path"); // for file path

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on("task", {
//         parseXlsx({ fi1ePath }) {
//           return new Promise((resolve, reject) => {
//             try {
//               const jsonData = xlsx.parse(fs.readFileSync(fi1ePath));
//               resolve(jsonData);
//             } catch (e) {
//               reject(e);
//             }
//           });
//         },
//       });
//     },
//   },
// });

// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
      test("checking organization, should be nonprofit",function () {
        expect(launchcode.organization).toEqual("nonprofit")
      })
      test("checking executiveDirector, should be Jeff",function () {
        expect(launchcode.executiveDirector).toEqual("Jeff")
      })
      test("checking cool employess, should be 100",function () {
        expect(launchcode.percentageCoolEmployees).toEqual(100)
      })

      test("checking programs offered, should be Web Development, Data Analysis, Liftoff",function () {
        expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"])
      })
});
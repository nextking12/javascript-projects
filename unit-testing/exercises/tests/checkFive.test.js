const checkFive = require('../checkFive.js')

describe("checkFive", function(){

    test("Checking to see if given number is less than 5, this number is less than 5", function() {
       //code here...
       let output = checkFive(2);
       expect(output).toBe("2 is less than 5.");
    });

    test("Checking to see if given number is greater than 5, this number is greater than 5", function() {
        //code here...
        let output = checkFive(8);
        expect(output).toBe("8 is greater than 5.");

    });

    test("Checking to see if given number is equal than 5, this number is equal to 5", function() {
        //code here...
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");

    });

});
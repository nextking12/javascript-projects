//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuel = "";
let numOfAstros = "";
let shuttleAlt = "";




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline - sync');

  startFuel = Number(input.question("Whats the starting fuel level? "));

while (startFuel < 5000 || startFuel > 3000){
  startFuel = Number(input.question("Please try again...Whats the starting fuel level? "));
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numOfAstros = Number(input.question("How large is the crew? "));
   while (numOfAstros < 0 || numOfAstros > 7){
    Number(input.question("Please try again...How large is the crew? "));
  }
   
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while ()

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

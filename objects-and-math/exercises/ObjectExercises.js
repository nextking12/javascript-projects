let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,

};

let spaceDog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
};

let spaceAlgae = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.000000001,
   age: 1,
};

// After you have created the other object literals, add the astronautID property to each one.



salamander["astronautID"] = 1;
superChimpOne["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
spaceDog["astronautID"] = 4;
spaceAlgae["astronautID"] = 5;

// Add a move method to each animal object
salamander["move"] = function () {
   {return Math.floor(Math.random()*11)+ 1
};
};

superChimpOne["move"] = function () {
   {return Math.floor(Math.random()*11)+ 1
};
};

superChimpTwo["move"] = function () {
   {return Math.floor((Math.random()*11)+ 1)
};
};

spaceDog["move"] = function () {
   {return Math.floor(Math.random()*11)
};
};

spaceAlgae["move"] = function () {
   {return Math.floor(Math.random()*11)+ 1
};
};
// Create an array to hold the animal objects


animalObjects = [superChimpOne, superChimpTwo, salamander, spaceDog, spaceAlgae];
// Print out the relevant information about each animal.
//for (i in animalObjects){
   //console.log(animalObjects[i])
//};
// Start an animal race!

function crewReports (animal) {
   console.log (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}  

crewReports(superChimpTwo);

function fitnessTest(array) {
   
}
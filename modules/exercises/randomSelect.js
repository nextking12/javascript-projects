

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  return arr[Math.floor(Math.random() * arr.length)];
}

//arr1 =[1, 2, 3];

console.log(randomFromArray(arr1));
//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
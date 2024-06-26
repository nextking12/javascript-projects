//Rectangles Exercise
/*let rect = ""
function makeLine(size){
    for (let i = 0;i < size;i++){
       rect += "#"; }
    return rect;
}
console.log(makeLine(5));*/

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

//Square Exercise

/*let square = ""
function makeSquare(size){
    for (let i = 0;i < size -1;i++){
       square += "\n#####"; }
    return square;
}

console.log(makeSquare(5));*/

//Rectangle Exercise w/ 2 Parameters

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
console.log(makeRectangle(3,5));
/*function makeRectangle(height, width){
for (let i = 0; i < height; i ++){
    width = ""
    width += "\n#####";
}
return width;
}
console.log(makeRectangle(5, 3));*/

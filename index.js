
// Using Path module

const path=require('path');

// *1-
console.log(__filename); 

// * 2-
console.log(__dirname); 

// *3-
console.log(path.basename(__filename)); 

// *4-
console.log(path.extname(__filename)); 

// *5-
console.log(path.join(__filename));

// *6-
// *object
console.log(path.parse(__filename));

// *7-
console.log(path.dirname(__filename));

// *8-
// console.log(path.format(__filename));


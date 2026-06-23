/**
 * Regular Expressions
A Regular Expression is a sequence of characters that forms a search pattern.

Regex is a common shorthand for a regular expression.

JavaScript RegExp is an Object for handling Regular Expressions.

RegExp are be used for:

Text searching
Text replacing
Text validation
 */



// do case sensitive search in this string 
// let name = "W3schoolsyStem bagh"
// let res = name.search(/W3schoolsyStem/i)
// let res = name.match(/W3schoolsyStem/)  
// let res = name.replace(/W3schoolsyStem/ ,"hello")
// console.log(res)





// -----------------globale search --------------------------------------------
let text = "Black, white, red, green, blue, yellow.";

let result = text.match(/red|green|blue/g);

console.log(result)

// String Coercion (+)
// If any part of a + operation is a string, JavaScript converts everything to strings:

let x = "5" + 2 // x = "52"

// Other arithmetic operators (-, *, /, %) and the unary plus (+x) force values into numbers.

let x2 = "5" - 2 // x = 3


// Loose Equality (==)
// This operator performs coercion to find a "common type" before comparing.

let x3 = (5 == "5") // x = true


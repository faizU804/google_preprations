// create a set and then add the letters in it 
// const letter = new Set()
// const a = 'q'
// const b = 'g'
// const c = 's'
// const d = 's'
// const e = 'h'


// letter.add(a)
// letter.add(b)
// letter.add(c)
// letter.add(d)
// letter.add(e)

// for (let values of letter){
//     console.log(values)
// }
// console.log(letter)



// ---------------------------------imagine api return users we need to remove the duplicate users0-------------------

// const users = [
//  "Ali",
//  "Ahmed",
//  "Ali",
//  "Sara",
//  "Ahmed"
// ]

// here we need unique users so we use sets 

// const unique = new Set(users)
// console.log(unique)




//------------------------------another example is here ---------------------------------------
// const categories = [
//  "Electronics",
//  "Clothes",
//  "Electronics",
//  "Shoes",
//  "Clothes"
// ];

// const uniqueItem = new Set(categories)
// console.log(uniqueItem)

// methods are here 
// console.log(uniqueItem.size)
// console.log(uniqueItem.has('Shoes'))




// ---------------------------------------foreach for sets----------------------------

// const letters = new Set(["a","b","c"])
// letters.forEach( (letters) => {
//     console.log(`letters are : ${letters} `)
// })





// --------------------------------values method------------------------------------------

// const letters = new Set(["a","b","c"]);
// const iterator = letters.values();

// let text = ""

// for (let x of iterator){
//     text += x
// }

// console.log(text)




// --------------------------------union ------------------------------------------
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
const D = A.intersection(B);
const E = A.difference(B);
console.log(C)
console.log(D)
console.log(E)
// ------------------------------Object.assign()--------------------------
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// Create Source Object
// const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
// Object.assign(person1, person2);




// -------------------------------------Object.entries()--------------------------------------------
// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.entries(person);

// bcz they converted into array so we use forEach map filter etch functions on these array fields
// text.forEach( (item) => {
//     console.log(item)
// })

// console.log(text)



// ----------------------------------->>>>>>>google interview question --------------------------------
// const person = {
//     name: "John",
//     age: 30
// };

// const result = Object.entries(person).map(([key, value]) => {
//     return `${key.toUpperCase()} = ${value}`;
// });

// console.log(result);




// ----------------------------------another example is here --------------------------------
// const person = {
//     firstName: "John",
//     age: 50
// };

// const updated = Object.fromEntries(
//     Object.entries(person).map(([key, value]) => [
//         key,
//         typeof value === "string" ? value.toUpperCase() : value
//     ])
// );

// console.log(updated);





// ------------------------------->>>>>>>>>>>>anotehr example is here 
const user = {
    name: "Faiz",
    city: "Rawalpindi",
    profession: "Software Engineer"
};

Object.entries(user).map(([key,value]) => {
    console.log(key ,value)
})



// --------------------------------fromEntries ------------------------------------------
// convert entities of array into object 

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);

// for in use for key showing so we use just for keys 
// for(let x in myObj){
//     console.log(x)
// }
// console.log(myObj)



// ---------------------------------obj of values -------------------------------------
const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);

console.log(text)



// ------------------------------------------another examplee is here ----------------------------------

// Create an Array
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function mycallback({quantity}){
    return quantity > 200 ? "high" : "low"
}

let res = Object.groupBy(fruits , mycallback)
console.log(res)



// --------------vvvvvery imp above they group them in seprate arrays high and low also inside object
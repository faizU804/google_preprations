// ---------------------------------------define object property----------------------------------------------------

// const person = {
//     name : "faizu",
//     age : 23 ,
//     room : "n0r11",
//     eductation : "bscs"
// }

// let res = Object.defineProperty(person, "year" ,{value :"2002"})
// console.log(person)
// console.log(res)



// -------------------  adding proerpty 
// very imp bcz they return same object so enumrable is false we make them true then they show year like below example
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// };

// Add a Property
// let res = Object.defineProperty(person, "year", {value:"2008", enumerable : true});
// console.log(person)
// console.log(res)




//-------------------------- edit property value ----------------

// Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a Property
let res = Object.defineProperty(person, "language", {value : "NO"});
console.log(res)





// ----------------------------------veryimp question ------------------------------------
// very imp bcz they return same object so enumrable is false we make them true then they show year like below example
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// };

// // Add a Property
// let res = Object.defineProperty(person, "year", {value:"2008", enumerable : true});
// console.log(res)
//  console.log(Object.getOwnPropertyDescriptor(person, "language"))




// ---------------------------------another project example ---------------------------------

const account = {}

Object.defineProperty(account , "accountNumber" , {
    value : "PKFH4232424211",
    writable :false,
    enumerable:true

})

account.accountNumber ="ABC"

console.log(account)



// ---------------------------------final result example -----------------------------------------------

// const person = {}


// Object.defineProperty(person , "age" , {
//     value :25,
//     writable :true,
//     enumerable : true
// } )
// console.log(person)




// own proeprty 

const person2 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.getOwnPropertyNames(person2)
console.log(person2)



// ---------------------adding getter seeter -------------------------

// const men = {firstName:"faiz", lastName:"khan"};
// Object.defineProperty(men , "fullName" , {
//     get : function(){
//         return this.firstName + " " + this.lastName
//     }, enumerable :true
// })

// console.log(men.fullName)

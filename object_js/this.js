// const detail = {
//     firstName : "faiz",
//     lastName  : "sardar",
//     fullName  :function(){
//         return this.firstName + "  " + this.lastName
//     }
// }


// console.log(detail.fullName())



// ---------------------------------another example ----------------------------------------------

// const person = {
//     name : "faiz",
//     myFunction : function(){
//         return this
//     }
// }
// console.log(person.myFunction())




// -------------------------------Why Is It Called Object Method Binding--------------------------------

// const person = {

//     name: "John",

//     greet() {
//         console.log(this.name);
//     }

// };
// person.greet()
// console.log(person.greet())


/**
 * question is above example 
 * 
 * who owns greet -> person correct . then it means this = person and then print them.
 * 
 */



// ----------------------------------Real Project Example

// Imagine you're building an e-commerce website.


// const product = {
//     item : "laptop",
//     price : 1200,
//     available : true,
//     getItem(){
//         return this.item + " " + this.price + " " + this.available
//     }
// }
// console.log(product.getItem())


// ---------------------->>>>>>>>>>>>>>>>>>>>>>Exlpicit binding------------------------------------


// const person1 = {
//     fullName(){
//         return this.firstName + "" + this.lastName
//     }
// }

// const person2 = {
//     firstName : "faiz",
//     lastName : "rrehman"
// }
// this is called explicit binding
// console.log(person1.fullName.call(person2))
// another method
// console.log(person1.fullName.apply(person2))
// testing another method
// let res = person1.fullName.bind(person2)
// console.log(res())




// ------------------------------------------ Function Borrowing-----------------------------------

// const person = {

//     firstName: "John",

//     lastName: "Doe",

//     fullName() {

//         return this.firstName + " " + this.lastName;

//     }

// };


// const memeber = {
//     firstName : "hell",
//     lastName : "nowwhere"
// }

// let store = person.fullName.bind(memeber)
// console.log(store())



// ------------------------------------final repo is 

/**
 * n JavaScript, this is a dynamic reference whose value is determined 
 * by how a function is invoked. In object methods, this normally refers to 
 * the object that called the method, 
 * but call(), apply(), and bind() can explicitly set what this refers to.
 */
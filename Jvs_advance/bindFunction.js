//----------------------------------- does not run create new funcitons ------------------------------------------

// bind() creates a brand-new function that permanently remembers what this should be.

// function greet() {
//     console.log(this.name);
// }

// const name = {
//     name : "faizi"
// }

// let store = greet.bind(name)
// store()
// console.log(store())



// ---------------------------------another function =------------------------------


// const customer = {
//     name : "faizu"
// }

// function greetCustomer(){
//     return "Hello " + " " + this.name
// }

// let result = greetCustomer.bind(customer)
// console.log(result())

/**
 * Why bind() Exists

To solve the biggest JavaScript problem:

Lost this
 */


// ====================================another example ----------------------------------------

// const persn = {
//     name : "faizu",
//     showName(){
//         this.showName
//     }
// }


// they lost if we do like this

// const rs = persn.showName()
// console.log(rs)

// they dont lost if we do like this 

// const live = persn.showName.bind(persn)

// setTimeout( live, 2000)




// -------------------------------react example reallife ------------------------------------------

// class user {
//     constructor() {
//         this.name = "Faiz";
//     }

//     showName() {
//         console.log(this.name);
//     }
// }

// button.onclick = user.showName.bind(user);





// --------------------------------------bind() With Arguments---------------------------------

// function add(a,b){
//     return a + b
// }

// const store = add.bind(null ,2)
// console.log(store(4))


// --------------------------------------another exaMPLE IS EHRE ------------------------------------

// function multi(a , b){
//     return a * b
// }

// const store = multi.bind(null , 5)
// console.log(store(5))



// ----------------------------------------use in partical applications--------------------------------


function calculateTax(tax, amount){
    return tax * amount
}

const pakTax = calculateTax.bind(null , 0.5)

console.log(pakTax(500))

/**
 * 
 * bind() creates and returns a new function that
 *  permanently remembers the specified this value and optional arguments,
 *  allowing the function to be executed later without losing its context.
 * 
 * 
 */
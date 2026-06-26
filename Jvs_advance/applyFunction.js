/**
 * Step 5: The apply() Method
Definition

apply() allows you to:

Choose what this should be.
Execute the function immediately.
Pass arguments as an ARRAY.
 */


// syntx is functionName.call(thisvalue, ar1,ar2,arg3)  for call 

// syntx is functionName.apply(thisvalue, [ar1,ar2,arg3])  for apply 


// -----------------------------------first example of apply ----------------------------------------------

// const person = {
//     name : "faiz"
// }

// function greet(greeting){
//     return greeting + " " + this.name
// }

// console.log(greet.apply(person ,["hello , good morning "]))




// -------------------------------------second example ------------------------------------------------------

// imagine food pizza delivery servive 

// function orderPizza(size, topping){}

// const user = {
//     name : " faiz "
// }

// const OrderData = [
//     "large",
//     "peproni"
// ]

// insted of call like this 

// orderPizza.call(user , "large" , "peproni")


// we can do like this by apply 

// orderPizza.apply(user , OrderData)



// ------------------------------------Multiple Arguments -----------------------------------------------

// const person = {
//     name : "faiz"
// }

// function delivery(age ,city){
//     console.log(
//         `${this.name} ${age} ${city}`
//     )
// }


// delivery.apply(person , [23 ,"isb"])
// delivery.call(person , 23 ,"isb")



// -------------------------------------------another example real world promblme-------------------------------

const numbers = [23,34,54,65,75,35,37,32]

// let res = Math.max(numbers)
// console.log(res)    //nan bcz they need elements not array need to be seprate elements of array


// solution is apply

let res = Math.max.apply([] ,numbers)
// let res = Math.max.apply(null ,numbers)
console.log(res)




// modern syntx is like to get values seprate by spread operator 
const tie = Math.max(...numbers)
console.log(tie)

/**
 * The One-Line Definition

apply() works exactly like call(), except that function arguments are passed as a single array instead of separate values.
 */
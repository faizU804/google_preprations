// function sayHello() {
//   return "hello how are you"
// }

// // let result = sayHello()
// // console.log(result)
// console.log("result is here " , sayHello())




// another example with for parameter
 
// function multi(a = 3 , b = 5){
//   return a * b
// }
// console.log(multi())
// console.log(multi)




// --------------- benefit is call whenever you want 

// function add(a, b) {
//   return 
//   a + b
// }

// let x = add(5, 2)
// let y = add(15, 22)
// console.log(x ,y)



// local variable is written here like this 

function localvar(){
  let carName = "BMW"
  // here we use carName 
}
// but here we cannot access  carName 


// funciton use as variable----------

// function toCelsius(toCelsius) {
//   return toCelsius * 0.2
// }
// let text = "temperature is " + toCelsius(55) + "Celsius"

// console.log(text)



//-----------------------  calling vs refrence -------------------------------//

function sayHello(){
  return "Hi function i am here for fetch"
}
// sayHello  this is way passing refrence of function not result 
// sayHello() paranthesis shows this function is executed and show result when invoke 



// -------- parameters ---------------//

/**  use to pass values to functions like below examples we done here below */

// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(4, 5);
// console.log(result)


// -------- function with one parameters ---------------------//


// function sayHello(name){
//   return "Good morning " + name
// }

// let name = sayHello("faiz")
// console.log(name)




// -------------function with multiple parameters ----------------------------//

// function sayHello(firstname , lastname){
//   return firstname + lastname + " Good morning sir " 
// }

// let x = sayHello("faiz ", " ur rehman ")
// console.log(x)





// difference bw parameters and argumnts 

// parameters : are the name listed in functions 
// while arguments are the real values that use in function defination

// --------------------A funciton with incorrect parameters -------------------

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius();
// console.log(value)
// its retunrn always nan . which mean not a number





// -----------------------DEFAULT parameters ------------------------------//

// function multiple(x,y = 10){
//       return  x * y
// }
// let  result = multiple(2)
// // let  result = multiple()
// console.log(result)

/** if no numbers given then return nan 
 * if single number given then its return number with answer
 */






// RETURN :  value return to the function or sent value out of function 

// function sayhello(){
//   return "hello mam"
// }
// let res = sayhello()
// console.log(res)



// -------------- return calculated values --------------------//

// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(4, 5);
// console.log(result)




// function without return how they behave 

// if function does not return value then it means its return undefined. make sure see properly
// function mul(a , b){
//   let x = a * b
// }

// let res = mul(5,5)
// console.log(res)



// ------------------return values too early ------------------//


// function cal(age){
//   if(age<19){
//     return "you are too young"
//   } return "access granted"
// }

// let res = cal(1)
// console.log(res)




// javascript functions argumnets object

// x = findMax(23,23,21,324,32,13,12,32,23,121,23,1)

// function findMax(){
//   let max = -Infinity
//   for(let i = 0; i < arguments.length; i++){
//     if(arguments[i] > max){
//       max = arguments[i]
//     }
//   }
//   return max
// }

// console.log(`here is your largest number in findmax function which is ${x}`)





// here is same starute for adding 

// x = sumall(1,2,3,45,5,3,657,87.,453,3,2)

// function sumall(){
//   let sum = 0 
//   for(let i = 0 ; i < arguments.length ; i++){
//     console.log(arguments[i])
//     sum += arguments[i]
//   }
//   return sum;
// }

// console.log(x)



// /---------------------------- argumnt can be varibable so we see it here as well 

// let x = 45 
// let y = 77

// function mul(){
//   return x * y
// }

// console.log(mul(x ,y))




// Default parameter ... sometime its default parameters 

// function myFun(x,y){
//   if(y === undefined){
//     y = 4
//   }
// }





// rest parameters  which is three dots in argumnts ...


// function sum(...args){
//   let sum = 0
//   for(let arg of args){
//     sum += arg
//   }
//   return sum
// }

// let x = sum(1,3212,12,12,132,112,2)
// console.log(x)



// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x)





// ---------------standard fun and function expression 

// function sayhello(){
//   return "hello"
// }

// // expression fun  
// const result = function (a ,b) {return a * b}
// console.log(result(4,4))





//ftn expression return function or pass argumnt to another fun

// function run(fn){
//   return fn
// }

// function sayHello(){
//   return "Hello world"
// };

// console.log(run(sayHello()))





//------------------------------------ function arrows ------------------------------

// const add = (a ,b ) => {
//   return a + b ;
// }

// console.log(add(12,12))



// -------------------------------------short handle syntx ---------------------------
// -----------------------------------------for normal ftn---------------------------

      // const result = function(a,b) {return a + b}

// -----------------------------------------for arrow ftn---------------------------

  // const multiply = (a , b) => a * b;


  // if you have only one paramter you skip the braces 

  // const multi = val => "helo" + val;




  // arrow fthn with no parameter

  // const no = () => "hello"



  // ---------------------THIS context ------------------------

  // arrow ftn have no THis context they get by surroding code . while simple ftn have 

  // simple ftn 

  // const person = {
  //   name : "faiz",
  //   age : 23,
  //   greet : function(){
  //    return this.name
  //   }
  // }

  // let res = person.greet()
  // console.log(res)




  // arrow ftn we write example here 

   const person = {
    name : "faiz",
    age : 23,
    greet : () => {
     return this.name
    }
  }

  let res = person.greet()
  console.log(res)
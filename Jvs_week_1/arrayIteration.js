// foreach 

// const numbers = [12,23,34,45,65,32,42,23,33,23]
// let text = ''
// numbers.forEach(myFun)

// function myFun(value){
//     return text += value 
// }

// console.log(text)

// const name = ["laptop" , "desktop" , "tablet" , "mouse" , "Joystick", "keyboard"]

// foreach use and add text product : then name of array of each element
//  name.forEach(function (items){
//     console.log("Product : " + name)  
//  })



 //another example is here for numbers 

//  const numbers = [12,43,2,41,42,32,2,42,66]
//  numbers.forEach( (numbers) => {
//     console.log(numbers + 10)
//  })




// -------  map----------------------

// const example = [12,34,64,85,32,84,34,45,6]
// let res = example.map( (example) => {
//     return example * 2
    
// })
// console.log(res)




// -------main difference bw map and foreach . foreach doessomethning but return nothing . but map give you return an array just like above example.



// --------------------------reallife example with beautfiul concept Map and foreach ------------------------------
// forEach 

// foreach use when we need not any output new like they Do something just like below example 

// like boss says we just want to print the names ... so we dont need any new array
// const names = ["ali" , "ahmed" , "sara" , "sana" , "hafsa" ,'sumbal']

// names.forEach( (names) => {
//     console.log(names)
// })

// if we store the value and retun new they give undefined me 

// const names = ["ali" , "ahmed" , "sara" , "sana" , "hafsa" ,'sumbal']

// const res = names.forEach( (names) => {
//    return names
// })
// console.log(res)

// they give me undefind



// ---------------------------know for map 

// map return new array so when we use : when boss says we need also to attach thier gamail so we need new array

// const names = ["ali" , "ahmed" , "sara" , "sana" , "hafsa" ,'sumbal']
// const emails = names.map( (names) => {
//     return names + "@gmail.com"
// })
// console.log(emails)


// they return new array with gamil attachmnt



// ------------------------------------Real Project Example 1  E-Commerce product listing ---------------------

// const product = ["laptop" , "mobile" , "ipad", "desktop"]

// using index we show these items 

// product.forEach( (value , index) => {
    // console.log(`${index + 1 }, ${value}`)
//     console.log(` product ${index + 1 } ${value}`)
// })

// console.log()




// ------------------------------------Building react cards --------------------------------------------------

// api return me names in array 

// const names = ["ali" ,"faiz","hamza" ,"sara","saba"]

// and i want response like this User #1: Ali User #2: Ahmed User #3: Sara


// const res = names.map( (value , index) => {
//     return `User # ${index + 1} ${value}`
// })
// console.log(res)



// -----------------third parameter 

// const marks = [67,78,45,34,67,45,88]
// marks.forEach( (value , index , marks) => {
//     console.log(
//         `${value} out of ${marks.length} students`
//     )
// })




// ----------------------------- real tough example progress bar ----------------------------------

// const lessons = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React"
// ];

// i want like this 
/**
 * Lesson 1 of 4 : HTML
Lesson 2 of 4 : CSS
Lesson 3 of 4 : JavaScript
Lesson 4 of 4 : React
 */

// lessons.forEach( (value , index, lessons) => {
//     console.log(
//         `lesson ${index + 1} of ${lessons.length} : ${value}`
//     )
// })




// ----------------------------another tuff example of map in react ------------------------

// const products = [
//  {
//    id:1,
//    name:"Laptop"
//  },
//  {
//    id:2,
//    name:"Mobile"
//  }
// ];


// const result = products.map( (value , index, products) => {
//     return {
//         serial : index + 1,
//         product : value.name,
//         totalProducts : products.length
//     }
// })
// console.log(result)




// ----------------------------  if we use for object then we use like this ------------------------------

// const user = {
//     name: "Faiz",
//     age: 24,
//     country: "Pakistan"
// };

/**
 * they use three methods like   1:keys 2:values 3:entities
 */

// CONVERT KEYS INTO ARRAY  

// const keys = Object.keys(user)
// console.log(keys)   they return an array so we use foreach for this or map as your condition..

// Object.keys(user).forEach( (keys) => {
//     console.log("keys are : " + keys)
// })








// ----------------------second method is values --------------------------------


// const user = {
//     name: "Faiz",
//     age: 24,
//     country: "Pakistan"
// };


// Object.values(user).forEach( (values) => {
//     console.log(`your values are : ${values}`)
// })




//--------------------------third method is entities --------------------------------------

// const user = {
//     name: "Faiz",
//     age: 24,
//     country: "Pakistan"
// };

// Object.entries(user).forEach( (entries) => {
//     console.log(`your entries are here : ${entries}`)
// })



// -------------------------imagine api return your profile like this ----------------------


// const profile = {
//     name : "faiz",
//     email : "faizusardar900@gmail.com",
//     age : 23,
//     Work : "Software Engineer"
// }

/**
 * but i want like this 
    name : Faiz
    email : faiz@gmail.com
    role : Developer
 */

    // Object.entries(profile).forEach( ([keys , values]) => {
    //     console.log(
    //         `${keys} : ${values}`
    //     )
    // })



    // ---------------------------flat map ------------------------------------------------

    //------ first map all the array element and then flat the array ----------------------------

        const myArr = [12,324,3,45,12,32,33,4]
    //    const res =  myArr.flatMap( (myArr) => {
    //         return myArr * 2
    //     })
        // console.log(res)    return an array with proper multiply after in output

    // /----------- second method is /////////////////////////
        //   myArr.flatMap( (myArr) => {
        //     console.log(myArr * 2)
        // })  not give me array but flat and mutliply then give me numbers 



    // -------------------------FILTER ---------------------------------------------------------

    // const ages = [22,33,4,53,45,65,45,24,77,67]
    // const age = ages.filter( (values , index , ages) => {
    //     if(values > 18){
    //         return `above ages are ${values}`
    //     }
    // })


    // console.log(age)





    // ---------------------another example is here 


    // const numbers = [45, 4, 9, 16, 25];
    // const res = numbers.filter(calu)

    // function calu(values){
    //     return values > 18
    // }
    // console.log(res)



    // ------------------------Array reduce function -----------------------------------

    // run function on each element of array and then return single value its work left to right . and reduce right work right to left
    // reduce method does not reduce the original array 



    // -----------------------find the sum of all numbers in array -----------------------------------//

    // const arr = [324,34,23,32,22,32,3,23,32,32]
    // const res = arr.reduce(myFun)

    // function myFun(total ,value , index, arr) {
    //     return total += value
    // }
    // console.log(res)



    //----------------its takee 4 agrumnts also take initila value like this 

    // const res = arr.reduce(myFun , 12)
    // function myFun(total , value){
    //     return total += value
    // }
    // console.log(res)





    // ------------------------------ reduce right to left its work on right to left only same as reduce ------------

    //   const arre = [324,34,23,32,22,32,3,23,32,32]
    //   const res = arre.reduceRight(calMe , 20)

    //   function calMe (total , value ){
    //     return total += value
    //   }
    //   console.log(res)





    // ----------------------------- Every() method -----------------------------------------------

    // const numbers = [12,34,45,65,43,4,54,56,65,55]
    // const numbers = [56,45,34,56,67,45,67]
    // const overAge = numbers.every(ages)
    // function ages (ages) {
    //     return ages > 18
    // }
    // console.log(overAge)
    // answe3r me in true or false also iterate or check the whole array elements then give the result 



    // ----------------------------Some method ----------------------
    // check in array some values above or not if then return boolen output

//     const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(someOver18)




// -------------------------FROM method return and array object ----------------------------------

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let res = Array.from(text)
// console.log(res)


// ---------------------------create an array from array---------------------------------------

// const hell = [12,13,45,45,76,45,45]

// const dubli = Array.from(hell , (hell) => {return hell * 2})
// console.log(dubli)



// ----------------------------- array keys -----------------------------------------

// const fruits = ["mango" , "banana","apple","pineapple","peach"]
// const keys = fruits.keys()
// for (let x of keys){
//       text += x
// }
// console.log(keys)



// -------------------------------reallife project for of with array keys ----------------------------

// const fruits = ["apple", "mango", "banana", "peach", "stwawberry"]

// how we get keys .. here we tell how we get the keys

// let keys = fruits.keys()

// for(let x of keys){
    // console.log(x )
//     console.log(x + 1)
// }
// console.log(keys)



// ---------------------foroff use :::::::   give me values  


// const fruits = ["apple", "mango", "banana", "peach", "stwawberry"]

// for(let x of fruits ){
//     console.log(x)
// }




// ------------------------Imagine api return response like this --------------------------------------


// const product = ["laptop" , "mouse", "cpu" , "macbook"]

// for(let items of product){
//     console.log(items)
// }




//----------------------------------for in loop ::::: give me keys -----------------------------------



// const fruits = ["apple", "mango", "banana", "peach", "stwawberry"]

// for( let key in fruits){
//     console.log(key)
// }

// --- in array keys are indexes so they give me index which is called keys 



// ------------------------------- Most imp for in use for objects ------------------------------------
// const details = {
//     name : "faiz",
//     email : "faizusardar900@gmail.com",
//     age : 23,
//     phone : 1232
// }

// for (let keys in details){
//     console.log(keys)
// }



// ------------------------------another example is here -------------------------------------------

// const settings = {
//     darkMode : true,
//     language : "urdu",
//     notifications : true
// }

// display all keys with values 

// for (let val in settings){
//     console.log(`${val}: ${settings[val]}`)
// }


// ------------------------------With()--------------------------------------------------------
// safe way to update an array without altering the original array --------------------------

// const months = ["Januar", "Februar", "Mar", "April"];

// let res = months.with(2,"March")
// console.log(res)



// -------------------------------Spread operator-----------------------------------------------

// express array into indiviual elements then also use to join the arrays

// const arr1 = [12,33,34,34,23,42,32,43,24]
// const arr2 = [56,67,76,86,47,64,85,46,65]

// const total = [...arr1 , ...arr2]
// console.log(total)




// -------------------------------------another example -----------------------------------------
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Des"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)



// --------------------------------------pass an argumnt as a ftn for spread operator --------------------

// const arr1 = [1,32,45,45,64,45]
// const arr2 = [...arr1]
// console.log(arr2)



// -----------------------------------------min max value -----------------------------------------------
// const numbers = [23,55,21,87,56];
// let minValue = Math.min(...numbers);
// let maxValue = Math.max(...numbers);
// console.log(minValue , maxValue)




// -------------------------------------------rest operator---------------------------------------------

// const students = ["ali" , "faiz" ,"akbar","jeena","khalid","muneed","alexa"]

// const [firstname , ...remaningStudents] = students
// console.log(firstname)
// console.log([firstname])
// console.log(remaningStudents)


// -------------------------------------reallife project ----------------------------------------------

// const product = ["laptop" , "keyboard","cpu","mouse","macbook","joystick"]

// const [firstItem , secondItem , ...others] = product
// console.log('feature Item is ' + firstItem)
// console.log(secondItem)
// console.log(others)




// ---------------------------product card ---------------------------------------------

// function calcuationProduct (...prices){
//     let total = 0;
//     for(let price of prices){
//         total += price
//     }
// return total;
// }




// ---------------------------------REST operator with objects --------------------------------------

// const user = {
//   id: 1,
//   name: "Faiz",
//   age: 24,
//   city: "Rawalpindi"
// };

// const {name , ...others} = user
// console.log(name)
// console.log(others)


// ----------------------------------real react example -----------------------------------------
// suppose you recive the card with detial and you express only name 

const props = {
  name: "Faiz",
  age: 24,
  city: "Rawalpindi",
  role: "Developer"
};

const {name , ...otehrs} = props;
console.log(name)
console.log(otehrs)
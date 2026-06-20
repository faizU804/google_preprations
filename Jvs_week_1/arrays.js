// Here we discuss about arrays and know its fully clear wihtin interview concepts 

//-------------------------- how we access the array ----------------------------

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// let res1 = fruits[0]
// let res2 = fruits[1]
// let res3 = fruits[2]
// let res4 = fruits[3]
// let res5 = fruits[4]

// console.log(res1 , res2, res3, res4, res5)




// ------------------------------changing in array element---------------------------------------------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// fruits[0] = "orange"
// console.log(fruits[0])


// ---------------------------------convert array into string----------------------------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// let stri = fruits.toString()
// console.log(stri)


// ----------------------------------------full array access ---------------------------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// console.log(fruits)

// -------------------------------------------real power is thier builtin methods ---------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// let res = fruits.length
// console.log(res)


// ---------------------------------access first and then last array elemnt --------------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// let res =  fruits[0] for first elemnt to get 

// let last = fruits[fruits.length - 1]  return 5 start from index 1 
// let last = fruits.length - 1  return 4 bcz start from 0 
// console.log(last)


// -------------------------------------Looping an array -----------------------------------------//


// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]

// let total = fruits.length
// console.log(total)

// let text = "  "

// for(let i = 0 ; i < total ; i++){
//  text += fruits[i]
// }
// console.log(text)


// --------------------------------------  adding array element ------------------------------/

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
// fruits.push = "avacado"
// console.log(fruits)



// -------------------------------------also add them using length property--------------------------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]

// fruits[fruits.length] = "lemon"
// console.log(fruits)



// --------------------------adding high index create undefined holes in array example is given below ------//

// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]

// fruits[8] = "nashpati"
// console.log(fruits)  in result they show 3 empty items




// --------------------------------------------associtive arrays -------------------------------------------//

// const person = []
// person[0] = "faiz"
// person[1] = "ali"
// person[2] = "ahmi"
// person[3] = 'clark'
// person.length 
// console.log(person + person.length)




//--------------------------------------------------  if we do like this they are not allowed ------------------//
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined




/**
 * The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.
 */


// ------------------------------------------- type of array -----------------------------//
// const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]

// let type = typeof fruits
// console.log(type)



// -----------------------solve issue convert them in array insted of object 

// solution 1 :
    // const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
    // let res = Array.isArray(fruits)
    // console.log(res)
    
    
    // solution 2 :
    // const fruits = ["mango" , "apple" , "banana", "pineapple" , "peach"]
    // let res = (fruits instanceof Array)
    // console.log(res)


    // -------------------------------nested object inside multiple arrays -------------------------------//


//     const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//       ]
//     }

//    for (let x in myObj.cars){
//         x += myObj.cars[i].name
//         for (let j in myObj.cars){
//             x += myObj.cars[i].models 
//         }
//    } 

//    console.log()



// =----------------------------------ARRAY LENGTH=--------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let size = fruits.length;
// console.log(size)


// ----------------------------------Length property use to set the length as well--------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.length = 2;




// --------------------------------JVS array to string -----------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();



// ----------------------------Array at() -------------------------------------------

// get the third elemnt of array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);



// -----------------------------JOIn its method join all array elemnt to string--------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.join("  ");
// console.log(typeof res)
// console.log(res)



// -----------------------------PUSH POP we do here ----------------------------------------------//

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// console.log(fruits)

// it return the value thats pop out only

// ----------------------------push -------------------------------------------------------

// add new element in array at the end 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push = "KIWI"
// fruits.push("kiwi")
// console.log(fruits)




// -----------------------------------------Array shifting element-----------------------------------


// shift mehtod remove the first array element and shift all the other documnt to lower index

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let met = fruits.shift()
// console.log(met)
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])




// ------------------------------------Unshift----------------------------------------------
// add new element in array at its begning and return new array length

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("lemon")
// console.log(fruits)



// ------------------------------------changing array element--------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits[2] = "SOLUTIDE"
// console.log(fruits)



// ------------------------------length property
// use to append new array elemnt in end 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = 'Kiwi'
// console.log(fruits)



// ------------------------------- array is array 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = Array.isArray(fruits)
// console.log(res)
// console.log(fruits)


/**
 * 
 * use pop or shift to delete array elemnet insted of delete bcz they leave undefined holes make sure reming this
 */



// -------------------------------CONCATINATION -----------------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const total = fruits.concat(myGirls )
// const total = fruits.concat(myGirls , myBoys)
// console.log(total)



//----------------------------------- it return new array always not change any thing -------------------

// concat by values like this ---------------------------

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 
// const myChildren = arr1.concat("Peter" , "home"); 
// console.log(myChildren)


// --------------------------------copywithin()---------------------------------------------------------


/**
 *       idea is like this  :::::::::::  array.copyWithin(target, start, end)
 * 
 */
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.copyWithin(2, 0);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// let res = fruits.copyWithin(2, 0, 2);

// console.log(res)




//---------------------another example copywithin method done know  -------------------------------

// const toys = ["car" , "phone" , "card" , "playboard" , "chess" , "doll"]
// let res = toys.copyWithin(3 , 0, 3)
// console.log(res)


// /---------------------------------------flat array---------------------------------

// infinity or if what you want acc to you do it your own by number
// const myArr = [[1,2],[3,4],[5,6],34,343,123,23,[2,23,[23,23,13,[23]],[23]]];

// let res = myArr.flat(Infinity)
// console.log(res)




// ---------------------------------------flatMap()-----------------------------------
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr)



// ---------------------------SPlice -------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let res = fruits.splice(2,0 , 'lemon , "kiwi')
console.log(res)
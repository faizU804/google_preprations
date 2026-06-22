// search array topic is fully clear here . 

// method 1 is IndexOf()

// ------------------------example is here -----------------------------

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let res = fruits.indexOf("Apple")   its index start from 0 
// let res = fruits.indexOf("Apple") + 1    its index start from 1 
// console.log(res)



/**
 * Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.


 */
// -------------------------- another method of lastIndexOf()---------------------------------------------
// use to srach last item index and then return index 
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let res = fruits.lastIndexOf("Apple")
// let res = fruits.lastIndexOf("Apple") + 1
// console.log(res)



// ------------------------------include method --------------------------------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res = fruits.includes("Mango"); 
// console.log(res)





// -------------------------------  find()  array ------------------------------------------------------

// take threee argumnts like value index array 

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value , index , array) {
//         return value > 18
// }
// console.log(first)




// ---------------------find and filter difference -----------------------------------

//find return the single value after match ----- while filter return all matching values like below example


// const arr = [2,32,1,42,13,3, 24,33,21,31]
// const arr = [10,20,30,40]
// let res = arr.find( x => x > 20)
// console.log(res) 



// -------------------------- filter -------------------------
// return all matching elements 
// const arr  = [10,20,30,40,50,60,70,80,90]
// let res = arr.filter(x => x > 30)
// console.log(res)




// ---------------------------------- findindex()----------------------------------
 // item value // item index // array itself
// const arr  = [10,20,30,40,50,60,70,80,90]
// let res = arr.findIndex(x => x > 30)
// console.log(res)




//----------------------------------- findlast() -----------------------------------\
/**
 * ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
 * 
 */

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let res = temp.findLast(x => x > 40)
// console.log(res)



//---------------------------last index 

const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos)
// sorting an array 

// const fruits = ["kiwi" , "banana" , "apple" , "mango", "peach"]
// let res = fruits.sort()
// console.log(res)

// reverse an array 

// const temp = ["sun" , "moon" , "stars" , "cars" , "engine"]
// let res = temp.reverse()
// console.log(res) 





// by combining the sort and reverse you sort array in descednign order 

// const fruits = ["kiwi" , "banana" , "apple" , "mango", "peach"]
//  fruits.sort()
//  fruits.reverse()
//  console.log(fruits)




//toSorted : give new array and keep the original array but Sort method : alter the original array as well.
// ---------------------------toSorted---------------------------------------------

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted)



// -------------------------------toreversed ----------------------------------------
// keep the original array and return new array while only reverse method alter original array 
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toReversed();
// console.log(sorted)




//-----------------------------------------  sort for number both ascending and descending ------------------------

// with simple ftn
// const points = [40, 100, 1, 5, 25, 10];
// let res = points.sort(function(a, b){return a - b});


//with arrow ftn  acsending order
// const points = [40, 100, 1, 5, 25, 10]
// let res = points.sort( (a , b) =>  a - b)




//arrow ftn  with decending order 
// const points = [40, 100, 1, 5, 25, 10]
// let res = points.sort( (a , b) =>  b - a)



// simple ftn with descending order 
// const points = [40, 100, 1, 5, 25, 10]
// let res = points.sort(function (a , b ) {return b - a})
// console.log(res)




// -------------------------------------------Sorting Object arrays ------------------------------------------

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// with simple function 
// let res = cars.sort(function (a , b) {return a.year - b.year})

// with arrow ftn 
// let res = cars.sort( (a , b) => a.year - b.year)
// console.log(res)




// ------------------------------------min max ftn ---------------------------------------------

// const nums=[10,20,5,30];

// let min = Math.min(...nums);

// let max = Math.max(...nums);

// console.log(min);
// console.log(max);



//-------------------------------home ftn with pure logic for asc order 

function findMin(arr){
    let min = Infinity
    for( let i = 0 ; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

console.log(findMin([12,3,1,45,32,4,2,4,21,53,4,]))




// find max value 


function myFun(arr){
    let max = -Infinity
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
console.log(myFun([23,34,45,34,65,36,22,66,32]))
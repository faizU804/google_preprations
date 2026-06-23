// -------------for loop -----------------------------
// let text = ""
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }
// console.log(text)





// -----------------------for loop real life example --------------------------------------
// if we recive 100 names in api response then we need to display make sure we do in loop 

// const name = ["ali" , "ahmed" , "akabar", "afsal","harry","moiz","faiq","james","97more"]

// for (let i = 0 ; i < name.length ; i++){
//     console.log(name[i])
// }






// ------------------------------------E-commerce amazone have products ------------------------------


// const products = [ "laptop" ,"mouse","keybaord","lcd"]

// we need to display them in cards so we do like this 

// for (let product = 0 ; product < products.length ; product++){
//     console.log(products[product])
// }




// --------------------------------------While loop------------------------------------------------

// use :::: Used when you DON'T know exactly how many times the loop should run.

// let enterPin = ''
// while(enterPin !== "12345"){
//     enterPin = prompt("Enter Pin")
// }




// ------------------------------do while loop
// ---------------------------its always run atleast 1 times -------------------------------------------

//     do{
//     console.log(showMenu)

// } while(userWantsMoreFood)
    



// ---------------------example another ----------------------------------------
// ----------------------google style interview question -----------------------------

// const users = ["faiz","ali","ahmed","sara","hasan"]

// let found = false
// let i = 0 
// while( i < users.length){
//     if(users[i] === "faiz"){
//         found = true;
//         break;
//     }
//     i++
// }
// console.log(found)



// ----------------------------------gooogle style interview questions-------------------------------

// fruits array find mangoos in it or not 


const fruits = ["apple","banana","manogoos" , "peach" , "omla" ,"pineapple"]

let found = false
let i = 0

while (i < fruits.length){
    if(fruits[i] === "banana"){
        found = true;
        break ;
    }
    i++
}

console.log(found)
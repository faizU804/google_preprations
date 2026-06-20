// simple loop

// let age = 1
// let text = "you cannot drive "

// if(age > 16){
//     text = "you are eligable to drive "
// }

// console.log(text)



// another loog inside loop 



// let age = 18 
// let country = "USA"
// let text = "you cannot drive yet"

// if(country == "USA"){
//     if(age > 16){
//         text = "you can drive know whaoo"
//     } 
// }
// console.log(text)





// and operator 

// let age = 18 
// let country = "USA"
// let text = "you cannot drive yet"

// if(country == "USA" && age >= 16){
//  text = "you can drive know whaoo"
// }
// console.log(text)







//  else TOPIC 


// let hours = 25

// if (hours < 16){
//     text = "Good morning bro0"
// } else if (hours < 25){
//     text = "good evening brother"
// } else {
//     text = "good night "
// }
// console.log(text)



// JS ternary operator 
// let age = 91
// let text = (age > 18) ? "adult" : "young"
// console.log(text)


// 

// let isMember = true;
// let discount = isMember ? 2.1 : 1.0

// console.log(discount)



// switch statment and concept 

let day = 3

switch( new Date().getDay()){
    case(0):
    day : "sunday"
    break;
    case(2):
    day : "monday"
    break;
    case(3):
    day : "Tuesday"
    break;
    case(4):
    day : "Wednesday"
    break;
    case(5):
    day: "Thursday"
    break;
    case(6):
    day : "friday"
    break;
    case(7):
    day : "saturday"
    break;
   default :
   day: "Please Enter 1 to 7 numbers only " 
   break;
}

console.log("Today is --- ",day)
// ----------------------------------------------first example of settimeOut-------------------------------------

// setTimeout( myFunction , 3000)

// function myFunction(){
//     console.log("hello i am executed after 3 sec")
// }


// --------------------------------------------pass the whole functions as well --------------------------------

// setTimeout(function(){return console.log("hello i am executed know")} , 2000)




/*
setTimeout

↓

Function Reference

↓

Wait 3 sec

↓

Execute
*/




// ----------------------------------------passing arguments--------------------------------

// function greet(name){
//     console.log(name)
// }
// setTimeout(greet , 2000)  //they give you undefined output bcz need argumnt 
//  setTimeout(greet , 2000, "faiz")




// ------------------------------example two 
// another way to use call back as well 
// function greet(greet){
//     return greet
// }
// setTimeout( () => {
//     greet("faiz")
// } , 2000)





// ----------------------------------- User upload images they see loading   real project we need to make this---------\

// console.log("Uploding")

// setTimeout(()=>{
//     console.log("Uploded completed")
// },2000)



// --------------------------login page authentication ------------------------


// console.log("Login User ")
// console.log("Loading......")

// setTimeout(()=>{
//     console.log("Successfully login")
// },2000)




// --------------------------setInterverl------------------------------------
// let timer = setInterval(()=>{
//     console.log("tick")
// },2000)

// new we need to stop. if we dont stop then its never end 
// console.log(timer)
// clearInterval(timer)




// -----------------------debouncing techniques--------------------------------------------//

// let timer;
// function search(value){
//     clearInterval(timer)
//     timer = setTimeout(()=>{
//         console.log("searching" , value)
//     },500)
// }

/**
 * If the user types quickly,

Only the last request executes.

This is called debouncing, and it is a very common interview topic.
 */



// -----------------------------------real life example of project pizza --------------------------
let hideTimer;

function showNotification() {
    console.log("✅ Order placed successfully!");

    hideTimer = setTimeout(() => {
        console.log("🔕 Notification hidden automatically.");
    }, 5000);
}

function closeNotification() {
    clearTimeout(hideTimer);
    console.log("❌ Notification closed by user.");
}

showNotification();

// Imagine the user clicks close after 2 seconds
setTimeout(closeNotification, 2000);
// function add(a , b ){
//     return a * b
// }

// const hh = add(4,5)
// console.log(hh)



//------------------------------------------ call back reallife project example------------------------------
// function uploadImages(file , callback){
//     console.log("uploading...")
//     callback(file)
// }


// know we use dynamically this uplaod image call back function.......

// uplaodImage("cat.jpg" , function(file){
//     console.log("uplaod image successfully" , file)
// })

//or we use for thumbnil

// uploadImage("horse.jpg" , function(file){
//     console.log("thumbnil generated succesfully" , file)
// })



// -----------------------------Chapter 4 - Synchronous Callback---------------------------

// not every callback is asyncrounous

// function details(name , callback){
//     callback(name.toUpperCase())
// }

// details("faiz" , (result) => {
//     console.log(result)
// })


/**
 * above function everything happen immediatly 
 * execution like 
 * detail()  --> callback --> console.log()
 */




// --------------------------------------Chapter 5 - Asynchronous Callback------------------------------------

function getData(callback){
    setTimeout( ()=> {
        console.log("Google data")
    } ,2000)
}

getData(function (){
    console.log(data)
})


/*

let answer=getData();
console.log(answer);    this is wrong this show output undefined.

*/

// -----------------------------------call back hell-----------------------------------------//

/*
        flow is like for call back hell thats why promises created 
        Login

↓

Get User

↓

Get Orders

↓

Get Payment

↓

Generate Invoice

↓

Send Email
*/

// --------------------------------like login function ---------------------------------------

login(function(user){
    getOrder(user,function(orders){
        getPayment(orders, function(payment){
            createInvoice(payment , function(invoice){
                sendEmail(invoice , function(email){
                    console.log("Order placed successfully")
                })
            })
        })
    })
})



// --------------->>>>>>>>>>>>>>this is called callback hell so they are diffcult to understand and make promises

// -------------------------------------google level project ---------------------------------------
/**
Real Google-Level Project Example

Imagine you're building a food delivery app.

When the user clicks Place Order:

Validate the cart.
Save the order.
Send a confirmation email.

*/

/**
 Question 5 (Google Favorite)

Why are callbacks considered asynchronous?

A callback itself is not asynchronous.

A callback is simply a function passed to another function.

It becomes asynchronous only when an asynchronous API (such as setTimeout, fetch, file reading, or database operations) decides to execute it later.
 */
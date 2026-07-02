/**
 "Promise is a replacement for callbacks."

Think:

"Promise is a state machine that represents the future result of an asynchronous operation."
 */



//-------------------------->>>>>>>>>first simple example -----------------------------------------------//

// const promise = new Promise((resolve , reject) => {
//     let success = true;
//     if(success == true ){
//         resolve("your order deliver successfully")
//     } else{
//         reject("order should not be deliver this time")
//     }
// })

// after making promises they go to pending state imdedialty then they go to next state which is 
// operational resovle or reject .



// ---------------------------------fvrt google interveiw question ------------------------------

// two main concept in google interveiw producer and consumer--------------------------


//-------------------------> producer
    // const producer = new Porimse ((resolve , reject) => {})
//-------------------------> Consumer
    // producer.then()


    // const promise = new Promise((resolve , reject) => {
    //     resolve("google")
    // })

    // promise.then((result) => {
    //     console.log(result)
    // })





    // ----------------------------------Catch--------------------------------------

    /*
        suppose something catch it means they fail then they will handle.
    */

    // const promise = new Promise((resolve,reject)=>{

    // reject("Server Error");

    // });

    // promise.catch((error)=>{
    //     console.log(error)
    // })




    //---------------->>>>>finally -------------- it always execute and never depend on resovle or reject



    // -------------------chapter 8 promise chaining---------------------------

    /**
     * Because every .then() returns a new Promise.

Think of a relay race.

Runner 1
   │ passes baton
   ▼
Runner 2
   │ passes baton
   ▼
Runner 3

Each .then() waits for the previous Promise to finish before starting.
    */


// -----------------------------PROJECT IMAGEZILLA DEVELOPMENT-------------------------------------------

function uploadImage(){
    return Promise.resolve("image uploded successfully")
}

function generatedThumbnail(message){
    console.log(message);
   return Promise.resolve("Thumbnil genereted")
}

function saveDatabase(message){
    console.log(message)
    return Promise.resolve("data save successfully")
}

function notifyUser(message){
    console.log(message)
    return Promise.resolve("Successfully generated")
}


uploadImage()
.then(generatedThumbnail)
.then(saveDatabase)
.then(notifyUser)
.then(console.log)
.then(console.error)
// before function async call they make ftn to return promise . 
/*
The async keyword before a function makes the function return a promise.

This is true even if you return a normal value.

Example
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
*/



// async function hello(){
//    return "Hello google"
// }

// console.log(hello())



/* above example almost look like this one 
is almost equivalent to

function hello(){

    return Promise.resolve("Google");

}
*/


//------------------------------------await -------------------------------------

// function getUser(){
//     return Promise.resolve("faiz")
// }

// async function app(){
//     let user = await getUser();
//     console.log(user)
// }
// app()


/*
actual picture in memory for above example
Memory Picture

Promise

↓

await

↓

Resolved Value
*/


// -----------------------------TUFF and difficult example to understand the whole concept----------------
/*
Chapter 8 — Real Project Example (Image Upload)

Imagine you're building Imagezilla.

User uploads an image.

The application must:

Upload image
Generate thumbnail
Save database
Send notification
*/

// produce prosmies

// function upload(){

//     return Promise.resolve("Image Uploaded");

// }

// function thumbnail(){

//     return Promise.resolve("Thumbnail Generated");

// }

// function database(){

//     return Promise.resolve("Saved");

// }

// function notify(){

//     return Promise.resolve("Notification Sent");

// }







// consume prosmies 


// async function processingImage(){
//     try {
//         const uploadResult = await upload();
//         console.log(uploadResult);

//         const thumb = await thumbnail()
//         console.log(thumb);

//         const save = await database()
//         console.log(save);

//         const notifyUser = await notify()
//         console.log(notifyUser)
//     } catch (error) {
//             console.log(error)
//     }
// }

// processingImage()




/*
Chapter 9 — The Performance Mistake

Many beginners write

const user = await getUser();

const posts = await getPosts();

const comments = await getComments();

If those operations don't depend on one another, this is slower than necessary.
*/


// ------------------------------Advanced Real-World Example (Google-Level)-------------------------------------

 /*Imagine you're building a dashboard for an image hosting platform.

 When a user opens the dashboard, the frontend needs to fetch:

 User profile
 Uploaded images
 Notifications

 These requests are independent, so they should run together.*/


 async function loadDashboard (){
    try {
        const [profile, images , Notifications] = await Promise.all([
            getProfile(),
            getImages(),
            getNotifications()
        ])
        console.log(profile)
        console.log(images)
        console.log(Notifications);
        console.log("Dashbaord is ready")
    } catch (error) {
        console.log("Error in request" , error)
    }
 }

 loadDashboard()
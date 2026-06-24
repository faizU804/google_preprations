//   types of function decelerations 

function myFun(){
    console.log("Hello faiz its function declreation")
}

// function expression (Named )
const myName = function name(x,y){
    return x * y
}
// function expression (Anonymus )

const Dob = function (a,b){
    return `this is anonymus ftn`
}

const arrwoftn = (x) => {
    return `arrow ftn`
}

// function constructor is here 
const constru = new Function("x","y" , "return x * y")


// after ftn expression has been store in varibale the varibale can be used as funcitons

// const x = function (a,b){return a * b}
// let res = x(4,4)
// console.log(res)




// ------------------------------ftn expression vs decelration -----------------------------
// function decleration -------------

// let res = add(5,5)

// function add (a ,b){
//     console.log(a + b)
// }


//function epression 

// let ans = sum(4,4)
// let hell = function sum(a , b){
//     return a + b
// }
// console.log(ans)


// --------------------------funcitons are best jvs core concpets ------------------------------------

// function startApplications(){
//     console.log("Welcome...")
//     console.log("Check In first ")
//     console.log("Make the Account ")
//     console.log("Request for ID")
//     console.log("Pick your Card for entery pass")
//     console.log("Congrulations .....")
// }

// startApplications()
// startApplications()
// startApplications()
// startApplications()



// ----------------------------function decelration -------------------------

// hi()

// function hi(){
//     console.log("hello faiz")
// }




// ------------------------------Real project example for ftn decleration ----------------------------

// store the ftn in memory before execution . and declrration ftn are hoisted .
// login()

// function login(){
//     console.log("login successfully ")
// }



// ----------------------------------function expression ----------------------------------
// function store inside the varibale -----------------------------------


// const result = function (){
//     console.log("Hello its excuted bcz store in varible ")
// }
// result()


// not run cannot access result before initlization 

// result()
// const result = function (){
//     console.log("Hello its excuted bcz store in varible ")
// }




// ----------------------------------------Button click handler--------------------------------------

// const handleLogin = function(){
//     console.log("login successfully ...")
// }

// handleLogin()



// ------------------------------Mini project for functions ---------------------------------------
// E-commerce checkOut system


// function totalCalculate(price , tax){
//     return price + tax
// }
// function orderplace(){
//     const total = totalCalculate(120 ,20)
//     console.log(`Your total amount is : ${ total }`)
// }
// orderplace()


// placeOrder()
//      |
//      |
//      V
// calculateTotal()
//      |
//      |
//      V
// returns 120
//      |
//      |
//      V
// Order placed


// -------------convert to arrow ftn ---------------------------------

// const multiply = (a , b) => {
//     return a * b;
// }

// console.log(multiply())



// -----------------------------------callback------------------------------
// function greet(name){
//     console.log("hello" + name)
// }

// function sayname(callback){
//     callback("faiz")
// }

// sayname(greet)




// -----------------------------------imagine why we use callback ---------------------

// function downloadFile(callback){
//     console.log("download file....")
//     callback()
// }

// downloadFile(function(){
//     console.log("successfully sent email")
// })


// ------------------------------------------callback using function expression --------------------------------
// function calculation (a ,b, operation){
//     return operation(a,b)
// }

// const add = function add(a,b){
//     return a + b
// }

// console.log(calculation(4,4,add))






// --------------------------------------------callback using arrwo ftn ------------------------------------

    // function calculation (a, b ,operation){
    //     return operation(a ,b)
    // }

    // const multiply = (a ,b) => {
    //     return a * b 
    // }

    // console.log(calculation(5,5,multiply))



    // -----------------------------------callback inside an array -----------------------------------------

    // const numbers = [12,34,33,22,45,42,56,43,67,68]
    // simple ftn 
    // numbers.forEach(function (numbers){
    //     console.log(numbers)
    // })


    // arrow ftn second method-----------------

    // numbers.forEach( (numbers) => {
    //     console.log(numbers)
    // })





    // ----------------------------------another example ----------------------------------
    // SUPPOSE WE HAVE USERS AND WE NEED TO WELCOME THEM FOR SUCCSSFYLLY LOGIN 

    // const users = [ "faiz" , "faiq" , "muneeb" , "ali", "ahad"]
    // users.forEach( (names) => {
    //     console.log(`WELCOME Dear ${names}`)
    // })





    // ----------------------------------------call back in find --------------------------------------

//     const numbers = [12,34,33,22,45,42,56,43,67,68]

//    const res =  numbers.find( (values) => {
//        return  values > 18
//     })

//     console.log(res)




// ------------------------------------callback in filter ----------------------------------------
// const numbers = [12,34,33,22,45,42,56,43,67,68]

//    const res =  numbers.filter( (values) => {
//        return  values > 18
//     })

//     console.log(res)



// --------------------------------------- call back in map ---------------------------------------
// price need twice 

// const numbers = [12,34,33,22,45]

//    const res =  numbers.map( (values) => {
//        return  values * 2
//     })

//     console.log(res)




// ------------------------------------------E-commerce discount calculation-----------------------------------

// const price = [200,400,450,204,500,800,570,980,999,344]

// const totalDiscountAmount = price.map ( (price) => {
//     return price * 0.5
// })
// console.log(totalDiscountAmount)






// ----------------------------syncronus callback----------------------------------------
// ---------------------------runs immediatley but in sequence -----------------------------------------

// function greet(callback){
//    console.log("start")
//    callback()
//    console.log("end") 
// }

// greet( () => {
//     console.log("callback")
// })




// --------------------------------------Asynchronous Callback-------------------------------------//

console.log("start")
// simple function
// setTimeout( function (){
//     console.log("callback after 2 sec recived successfully")
// }, 2000)

// arrwo function 

// setTimeout( () => {
// console.log("callback... ")
// },2000)
// console.log("end")





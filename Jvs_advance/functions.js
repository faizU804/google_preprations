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


function totalCalculate(price , tax){
    return price + tax
}
function orderplace(){
    const total = totalCalculate(120 ,20)
    console.log(`Your total amount is : ${ total }`)
}
orderplace()


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
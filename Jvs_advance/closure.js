/**
 * First Understand the Definition

A closure is:

A function that remembers variables from its outer scope even after the outer function has finished executing.

Sounds complicated.

 */


// function Outer(){
//     let name = "faiz"
//     function inner(){
//         console.log(name)
//     }
//     return inner;
// }

// let res = Outer()
// res()


// -----------------------------------famous example=---------------------------------------------

// problem is anyone can modify the counter so anyone write counter 10 insted of 0 
// let counter = 0
// function add(couter){
//     return counter++
// }

// add()
// add()
// console.log(counter)


// -------------solution is here 

// function Counter(){
//     let count = 0
//   return  function(){
//          count++
//          return count
//     }
    // return inner
// }

// let res = Counter()
// let res2 = Counter()
// let res3 = Counter()
// let res4 = Counter()
// console.log(res() )




// ------------------------------for private bank data ----------------------------------------------

// function bank(){
//     let balance = 10000
//     return {
//         deposit(amount){
//             balance += amount
//         },
//         getBalance(){
//             return balance
//         }
//     }
// }

// /create account

// const account = bank()
// account.getBalance()
// console.log(account.getBalance())



// ---------------------------------real project example ------------------------------------------

// function creatAuth (){
//     let token = null;
//     return {
//         login(newtoken){
//             token = newtoken
//         },
//         getToken(){
//             return token
//         }
//     }
// }

// const acc = creatAuth()
// acc.login("abc123")
// console.log(acc.getToken())



// --------------------------------------inside the react -------------------------------------------------

// function outer (){
//     let counter = 0
//     function inner(){
//         counter++
//     }
//     return inner;
// }

// let store = outer()
// console.log(store())
// console.log(counter)



// ----------------------------------interview problem--------------------------------------------
// function counter() {

//     let count = 0;

//     return function() {
//         count++;
//         return count;
//     };
// }

// const c = counter();

// console.log(c());
// console.log(c());
// console.log(c());



// ---------------------------------------another example -----------------------------------------

function Outer(){
    let count = 4 
    return function (){
        count++
        console.log(count)
    }
}

let store = Outer()
store()
store()
store()


//----------------closure remember the original variable this and also make copies of variable-----------------

// A closure is a function that remembers and continues to 
// access variables from its outer scope even after 
// the outer function has finished executing, allowing 
// JavaScript to preserve state and create private data


// --------------------------------------- final example for this ----------------------------------



function authentication(){
    // private variable we delceare here 
    let token = null
    let loginCount = 0 

    // function inner side 
    
    return {
        login(newToken){
            token = newToken
            loginCount++
            console.log("user login")
        },
        logout(){
            token = null
            console.log("User successfully logout")
        },
        getToken(){
            return token
        },
        getLoginCount(){
            return loginCount
        },
        isAuthenticated(){
            return token !== null
        }
    }

}


const app = authentication()
app.login("123abc")
console.log(app.getLoginCount())
console.log(app.getToken())
console.log(app.isAuthenticated())
console.log(app.login())
app.logout()
console.log(app.isAuthenticated())




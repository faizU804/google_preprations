// -----------------no addational call needed to run this --------------------------------

// (function(){
//     console.log("hello i am invoke in iife ")
// })(),

// -------------------------------another example for loading application-------------------
// (function() {
//     console.log("Loading Payment Gateway");
//     console.log("Checking API Key");
//     console.log("System Ready");
// })();




// --------------------------------------iife with parameters -----------------------------

// (function (name){
//     console.log( "Hello " + name )
// })("faiz") 



// ---------------------------------iife ftn return values -------------------------------

// const res = (function(a,b){
//    return a * b 
// })(5,5)

// console.log(res)


// ---------------------------------another example ---------------------------------------
const counter = (function (){
    let value = 0 
    return {
        increment(){
            value++
        },
        get(){
            return value
        }
    }
})();
counter.increment()
counter.increment()
console.log(counter.get())


/**
 * One-Line Definition

An IIFE (Immediately Invoked Function Expression) is a function expression 
that is created and executed immediately, 
commonly used to create private scope,
 avoid global variable pollution, and run setup code only once.
 */
// -------------------------example one for call

// function hi(){
//     console.log(`how are you ${this.name}`)
// }

//  const person = {
//     name : "faiz"
// }

// hi.call(person)



// -------------------------------another example is here ----------------------------------------
// const user = {
    //     name : "faiz"
    // }
    
    // function sayHi(){
        //     return `Hello :` + this.name
        // }
        
        // console.log(sayHi.call(user))

// -------------------------------another example is here ----------------------------------------

// const user = {
    //     name : "faiz",
    // }
    
    // function sayhi(hi){
        //     return hi + " " + this.name
        // }
        
        // console.log(sayhi.call(user , "Hello"))
        
// -------------------------------another example with multiple argument ----------------------------------------

// const person = {
//     name : "faiz"
// }

// function sayHi(age , city){
//     return this.name + " " + age + city
// }

// console.log(sayHi.call(person, 23 , " bagh "))



// ----------------------------------------------another example reallife -------------------------------------

const admin = {
    name: "Admin"
};

const customer = {
    name: "Customer"
};

function showUser() {
    console.log(this.name);
}

showUser.call(admin)
showUser.call(customer)
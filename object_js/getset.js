// -------------------------------get /set with example of interview-------------------------------------------

// const user = {
//     firstName : "faiz",
//     lastName : "rehman",
//    get fullName (){
//     return this.firstName + " " + this.lastName
//    }
// }

// console.log(user.fullName)





// ----------------------------------another example is here ------------------------------------------

// const student = {
//     marks : [20,30,40,50],
//     get avgMethod(){
//         return (
//             this.marks.reduce( (a , b) => {
//               return  a + b
//             },0)
//         )
//         this.marks.length
//     }
// }

// console.log(student.avgMethod)




// -----------------------------------------real project of Ecommerce---------------------------------------

// const cart = {
//         items : [
//             {price : 200},
//             {price : 200},
//             {price : 500},
//             {price : 400},
//         ],

//          get totalPrice() {

//         return this.items.reduce(

//             (sum, item) =>

//                 sum + item.price,

//             0

//         );

//     }

// }

// console.log(cart.totalPrice)
// cart.items.push({
//     price : 800
// })

// console.log(cart.totalPrice)











// ------------>>>>>>>>>>>>>>>>>>>>>>SETTER property------------------------->>>>>>>>>>>>>>>>>>>>>>>>>


// const user  = {
//     firstName : "",
//     lastName : "",

//     set fullName(value){
//       const parts = value.split( " ")
//       this.firstName = parts[0]
//       this.lastName = parts[1]
//     }
// }

// user.fullName = "faiz urrehman"
// console.log(user.firstName)
// console.log(user.lastName)




// ------------------------------getter plus setter togather --------------------------------------------


const detail = {
    firstName : "",
    lastName : "",

    get fullName(){
        return this.firstName + " " + this.lastName
    },
    set fullName(value){
        let parts = value.split("  ")
        this.firstName = parts[0]
        this.lastName = parts [1]
    }
}
detail.fullName = "faiz urrehman"

console.log(detail.fullName)




// -------------------------------another example is here ----------------------------------
const user = {

    email: "",

    set userEmail(value){

        this.email =

        value.trim().toLowerCase();

    }

};

user.userEmail =

"  FAIZ@GMAIL.COM ";

console.log(user.email);



// --------------------------------passsword -------------------------------------

const pass = {
    password : "",
    set pass(value){
        if(value.length < 8){
            throw new Error(
                "password two short"
            )
        }
        this.password = value;
    }

}

let res = pass.pass = "abc12113"
// let res = pass.pass = ""  show error pass two short
console.log(res)



// --------------------------------interview question ----------------------------------------------

const person = {

    firstName:"John",

    lastName:"Doe",

    get fullName(){

        return this.firstName +

        " " +

        this.lastName;

    }

};

console.log(person.fullName);
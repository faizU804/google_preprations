// ------------------------full concept of classes-----------------------------------------//


/**
 * se the keyword class to create a class.

Always add a method named constructor():
 */


// class detail {
//     constructor(name , price ){
//         this.name = name ,
//         this.price = price
//     }
// }

// const p1 = new detail("faiz" , 22000)
// const p2 = new detail("zia" ,12000)
// console.log(p1)
// console.log(p2)







//------------------------------------another example is here -------------------------------

// class user {
//     constructor(name , year){
//         this.name = name,
//         this.year =  year
//     }

//     age(){
//         let date = new Date()
//         return date.getFullYear() - this.year
//     }
// }

// const faiz = new user("bmw" , 2022)
// console.log(faiz)
// console.log(`your car is ${faiz.age()} years old`)



// -----------------------------------you can sent paramter to the class----------------------------------

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }

// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("Ford", 2014);

// console.log(`your car is ${myCar.age()} years old know`)




// ------------------------------class inheritence -----------------------------------------------
// class User{

//     constructor(name){

//         this.name = name;

//     }

//     login(){

//         return `${this.name} logged in`;

//     }

// }
// const hell = new User("faiz")
// console.log(hell.login())





// ---------------------------------- extend and super ---------------------------------

// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// // extend class ------------>>>>

// class Admin extends User {
//     constructor(name , role){
//         super(name)
//         this.role = role
//     }
// }

// const admin = new Admin("faiz" , "Developer")
// console.log(admin)





// ----------------------------methods ------------------------

// class User{

//     login(){

//         return "User Login";

//     }

// }

// class Admin extends User{

//     login(){

//         return super.login()

//         +

//         " Successful";

//     }

// }

// ---------------------------------------getter seeter in calsses -----------------------

// class persn {
//     constructor(name){
//          this.name = name
//     }
//     get name(){
//         return this.name
//     }
//     set name(value){
//         this.name = value.trim()
//     }
// }




// -------------------------------------complex problem--------------------------------
// class User {
//     constructor(name, email) {
//         this._name = name;
//         this.email = email;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value.trim();
//     }

//     login() {
//         return `${this.name} logged in`;
//     }
// }

// class DeliveryPartner extends User {
//     constructor(name, email, vehicle) {
//         super(name, email);
//         this.vehicle = vehicle;
//     }

//     deliverOrder(orderId) {
//         return `${this.name} delivered order #${orderId} using ${this.vehicle}`;
//     }
// }

// const rider = new DeliveryPartner(
//     " Faiz ",
//     "faiz@gmail.com",
//     "Bike"
// );

// console.log(rider.login());
// console.log(rider.deliverOrder(101));




// -------------------------------static classes----------------------------


// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

// Example
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
// document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

// If you want to use the myCar object inside the static method, you can send it as a parameter:

// Example
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello " + x.name;
//   }
// }
// const myCar = new Car("Ford");
// document.getElementById("demo").innerHTML = Car.hello(myCar);





// ---------------------------------\\-----------------------------------

// class Car {

//     constructor(name){
//         this.name=name;
//     }

//     static hello(){

//         return "Hello";

//     }

// }

// console.log(Car.hello());

// hello

/**
 * but it does not work on below code bcz myCar() has no hello() method
 */

// const myCar=new Car("BMW");

// myCar.hello();



// -----------------------------true example of email vaerify ---------------

// class User1 {
//        static validator (email){
//             return email.includes("@")
//         }
// }

// console.log(User1.validator("faizusardar@gmail.com"))




// ------------------------------imge zilla 


// class mbcal {
//     static calculater(mb){
//        return mb * 1024 * 1024
//     }
// }

// console.log(mbcal.calculater(5))




// ------------------------------------pasing an object to static ------------------------------------
class Car {

    constructor(name){
        this.name=name;
    }

    static hello(x){

        return "Hello "+x.name;

    }

}

const res = new Car("FORD")
console.log(Car.hello(res))
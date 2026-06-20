// here we discuss about object in detail 
// const obj = {name:"faiz" , age : 23 , height: 57 , eyeColor : "blue"}



// -----------add empty object then add the properties ---------------------------//

// const emptyObj = {}

// emptyObj.name = "faiz"
// emptyObj.age = 23
// emptyObj.fee = 223
// emptyObj.hairs = "black"
// console.log(emptyObj)
// console.table(emptyObj)




// --------------------------- using new keyword we make the object --------------------------------


// const person = new Object({
//     name : "faiz",
//     age : 23,
//     dress : "black",
//     class : 16,
//     fullname : function(){
//         return this.name + " is my full name"
//     }
// })

// console.log(person.fullname())
// console.log(person.name)


// we access the obj property like here 
// const person = new Object({
//     name : "faiz",
//     age : 23,
//     dress : "black",
//     class : 16,
//     fullname : function(){
//         return this.name + " is my full name"
//     }
// })
// console.log(person["name"])





// ----------------------------------change the property of object ----------------------------------------//

// const person = new Object({
//     name : "faiz",
//     age : 23,
//     dress : "black",
//     class : 16,
//     fullname : function(){
//         return this.name + " is my full name"
//     }
// })

// person.age = 55
// person.name = " sardar "

// console.log(person.age + person["name"])




// ------------------------------------------deleting the properties---------------------------------------//

// const person = new Object({
//     name : "faiz",
//     age : 23,
//     dress : "black",
//     class : 16,
//     fullname : function(){
//         return this.name + " is my full name"
//     }
// })

// // delete person.age 
// // delete person.name 
//  person.name = "hi"
//  person.age = 21
// console.table(person)

    // * delete key word del both key value and property* /



// -------------------------------------------------------- CHECK if proerpty is exist or not -----------------//


// const person = {
//     firstName : "faiz",
//     lastName : "rehman",
//     age :  23,
//     eyes : "black"
// }

// let result = ("firstName" in person)
// console.log(result)





// --------------------------------  Nested object access method ------------------------------//

// const first = {
//     name : "faiz",
//     age : 23,
//     city : "rwp",
//     eduction : {
//         fsc : "read collage",
//         bscs : "fuuast",
//         completed : true
//     }
// }


// let res1 = first.eduction.fsc
// let res2 = first.eduction['bscs']
// let res3 = first.eduction.completed

// console.log(res1 + res2 + res3)




// access methods also given below 
// first.eduction.fsc
// first['eduction']['fsc']
// first['eduction']['fsc']


// ---------------------------------  THIS IN object refer to object who is currently calling and use -----------//
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
 
// };

// const res = person.fullName()
// console.log(res)






// another example is here -----------------------------------


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
//   getId : function(){
//     return this.age;
//   }
// };

// const res = person.fullName()
// const res2 = person.getId()
// console.log(res + res2)





// ------------------------------------------  another example with and without paranthese---------------------//


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
//   getId : function(){
//     return this.age;
//   }
// };

// const res = person.fullName()
// const res2 = person.getId()
// const res3 = person.firstName
// console.log(res + res2 + res3)

// without paranthese it return function defination but with paranthesis run the funtion and give value

// const person = {
//     name : "faiz",
//     firstName: "ksdf",
//     lastName : "fasdf"
// }

//  person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };



// ----------------------when use THIS alone its refer to global object make sure you try it as well -------------//

// let x = this 
// console.log(x)
/** they answer you only in browser window . and in local they show empty object only */



// in regular ftn this also refer to global object like given below 

// function myFun(){
//     return this
// }

// console.log(myFun())




// ----------------------------display javascript object as object ------------------------------------//

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // let res = person

// let text = person.name + "," + person.age + "," + person.city;
// console.log(text)




// --------------------------Forin loop give you keys and use for objects iterations only -------------------//

// let  detail = {
//     name : "faiz",
//     age : 23,
//     city : "ISB"
// }
// add values in text ... we use for in loop to iterate their keys not values so we add them proeprly
// let text = "  "
// for (let store in detail){
//      text += detail[store]
// }
// console.log(text)






// -------------------------------  create an array for property values ----------------------------------//


// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const res = Object.values(person)
// console.log(res)


// if we stringyfy the array then we do like this below 

// const res = Object.values(person)
// let final = res.toStringy()
// console.log(final)
// console.log(JSON.stringify(person))




// ---------------------------------Constructor-----------------------------------------------------------------//

// function everyoneuse (fName, lastName, age, color, hairs){
//     this.fName = "enter first name",
//     this.lastName  = "enter last name",
//     this.age = age,
//     this.color = color,
//     this.hairs =  "orange"
// }

// const student1 = new everyoneuse(" faiz " , " sardar " , 23 , " white " , " black" )
// const student4 = new everyoneuse( 23 , " white " , " black" )
// const student2 = new everyoneuse(" ali " , " khan " , 22 , " seedy " , " black" )
// const student3 = new everyoneuse(" hassan " , " hamed " , 13 , " brown " , " black" )

// console.log(student1 , student2, student3, student4)



// ---------------------------------adding property to an object --------------------------------
// function everyoneuse (fName, lastName, age, color, hairs){
//     this.fName = "enter first name",
//     this.lastName  = "enter last name",
//     this.age = age,
//     this.color = color,
//     this.hairs =  "orange"
// }

// let res = everyoneuse.fName = "ali"
// console.log(res)


// -------------------------------------add9ing new property ----------------------------------------

// function everyoneuse (fName, lastName, age, color, hairs){
//     this.fName = "enter first name",
//     this.lastName  = "enter last name",
//     this.age = age,
//     this.color = color,
//     this.hairs =  "orange"
// }

// let res = everyoneuse.prototype.house = "2Kanal"
// console.log(everyoneuse())
// console.log(res)


// -------------------------adding property ------------------------------------------------------//
// const person = {
//   name: "John",
//   age: 30
// };

// person.nationality = "English"
// console.log(person.nationality)




// --------------------------------adding new property------------------------------------------
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// person.nationality = "English"
// const person1 = new Person("faiz" , 12)
// console.log(person1)




// ---------------------------another example 

function person(name){
    this.name = "ali"
}

const person1 = new person("faizu")
person.nationality = "english"
// console.log(person.nationality)
// console.log(person1.name)
console.log(person)
console.log(person1)



// Methods for Defining JavaScript Objects
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()


//----------------------------------example start from here for objects-----------------------------------

// object literal inside braces key value with pair 

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// ----------------------------------create an object ------------------

// const obj = {
//     name : "faiz",
//     email : "faizusardar900@gmail.com",
//     age :23
// }



// --------------------------------using new keyword we make object as well ----------------------------

// const obj = new Object({
//     name : "faiz",
//     age :23,
//     ph : 2343
// })





// ------------------------------------Javascripts object create ---------------------------------------

// Create an Object:
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// // Create new Object
// const man = Object.create(person);
// man.firstName = "Peter";



// ------------------------------------------objects from entites----------------------------------------

// const fruits = [
// ["apples", 300],
// ["pears", 900],
// ["bananas", 500]
// ];

// const res = Object.entries(fruits)

// res.push(["bingo" , 300])
// console.log(res)




// ---------------------------JavaScript Object.assign()---------------------------------

// The Object.assign() method copies properties from
//  one or more source objects to a target object.

/** 
 * Object.assign(target, source);  take everything from source and then give to target but remain source same 
 * its just copies
 */



// ----------------------------objects-----------------------------------------------------------
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {
  firstName: "Anne",
  lastName: "Smith"
};

Object.assign(person1 , person2)
console.log(person1)

// -------------------------------------example two -------------------------------------
const car = {
    brand: "Toyota"
};

const details = {
    color: "White",
    model: 2025
};



Object.assign(car , details)
console.log(car)


// ------------------------------------------multiple source object-------------------------------
const person = {};

const basic = {
    firstName: "Faiz"
};

const contact = {
    city: "Rawalpindi"
};

const skills = {
    language: "JavaScript"
};

Object.assign(
    person,
    basic,
    contact,
    skills
);

console.log(person);


// -------------------------------very imp in react store in new object  --------------------------
const person3 = {
    name:"John"
};

const copied =
Object.assign(
    {},
    person3
);
console.log(copied)

// ---------------------------------another interveiw example -------------------------------
// const person4 = {
//     name: "John",
//     address: {
//         city: "London"
//     }
// };

// const response = Object.assign({} , person4)
// response.address.city = "paris"
// console.log(response.address.city)


/**
 * First:

Object.assign(target, source)
Modifies the existing target object.
Returns the same target object.

Second:

Object.assign({}, source)
Creates a new object.
Copies properties into it.
Leaves the original object unchanged.
 */


// -------------------------------------example is here------------------------
const obj1 = {
    x: 1
};

const obj2 = {
    y: 2
};

const obj3 = Object.assign({}, obj1, obj2);

obj3.x = 100;

console.log(obj1.x);
console.log(obj2.y);
console.log(obj3.x);



/**
 * 
 * Object.assign() copies the enumerable properties of one or 
 * ore source objects into a target object. It performs a shallow copy, 
 * overwrites existing properties with the same key,
 *  adds new properties that don't exist, and returns the modified target object.
 */


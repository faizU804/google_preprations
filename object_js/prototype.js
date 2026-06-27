/**
 Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Previously you have learned learned how to use an object constructor:
 */



function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");




// ------------------------------------\\

// You cannot add a new property to an existing object constructor:

Person.nationality = "English";  //show error 



// ---------------------------------------toaddd we need ---------------------------------------
/**
 * To add a new property to a constructor, you must add it to the constructor function:
 */



function person(first,last,age,eyecolor){
    this.firsName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English"
}

person.prototype.height = "23"
const p1 = new person("faiz" , "rehman" , 23 ,"blue", 57)
console.log(p1)

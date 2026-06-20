// const cannot be reassign. 

const PI = 3.141592653589793
// PI = 3.14  they show error 
// PI = PI + 3.14  they still show an error . its also universal value they cannot be changed.


// if we make over values that cannot be modified so we do like this 

const obj = {}

// create property which cannot be modified 

Object.defineProperty(obj, "my_values" , {
    value : 609,
    writable: false,
})

// console.log(obj.my_values)

// but if we change the value its not like given below 

obj.my_values = 100

// console.log(obj.my_values)




// const with arrays    


const cars = [ "sonata", "toyota" , "audi", "ferrari"]


// i can change the element in this array

cars[0] = "BMW"

// we also add the value

cars.push("Supra")

console.log(cars)



// but we cannot reassign array after using const 

// cars = ["a" , "d" , "g" , "w" , "q"]

// console.log(cars)  its shows error 

// Know for Objects we learn about them here as well 

const auto =  {model: 2004 , owner: "maxwell" , serialNumber:"Mxde342"}

auto.owner = "faiz"

auto.model = 2020

console.log(auto)



// but you cannot reassign the obj 

const auto =  {model: 2002 , owner: "swell" , serialNumber:"Mdf4e2"}
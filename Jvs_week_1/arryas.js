// here is length method how we use 
// let tree = "asdfhakjshfkajsdhfalkjshdflkjahsdfalkj"
// let count = tree.length
// console.log(count)



// here is CharAt method 

// const alpha = "aksjfdhakjsd"
// let get = alpha.charAt(4)
// console.log(get)


// here is another method we use it here CharCodeAt  -- it return the value of UTF on specific index here 


// const alpha = 'dsfAjsdfhs'
// const utfValue = alpha.charCodeAt(3)
// console.log(utfValue)




// here is another method CodePointAt --- its give value of first position 

// let today = "Hello how are you"
// let display = today.codePointAt(0)

// console.log(display)




// get code point method 

// let text = "Hello world"
// let code = text.codePointAt(1)
// console.log(code)




// get the third letter of name method name is string at 

// let text = "what happen ?"
// let code = text.at(2)
// console.log(code)

// properties access 

// let text = "what happen ?"
// let code = text[0]
// console.log(code)


// concat method 

// let text = "hello world"
// let text2 = "know you add"

// let result = text.concat(" " , text2)
// console.log(result)


// strings are imputable they are not to be change the only replace . 


// slice ... its take two parameters start and end but end not inlcuded and take slice and give it in new string 

// let food = 'apple, banana, shake, pineapple'
// let result = food.slice(6,14)
// // console.log(result, food)
// console.log(food)



// if we ommit the second paramerter slice out the rest of string

// let text = 'how are you today'
// let resul = text.slice(7)
// console.log(resul)

// if parameter is -ve then its count from end of string


// let str = "Apple, Banana, Kiwi";
// // let part = str.substring(7, 13);
// let part = str.substring(7);

// console.log(part)
// console.log(str)




// well formed . if string is well formed return true if not then false


// let text = "Hello world! /./jsdhfnslk";
// let resultt = text.isWellFormed();
// console.log(resultt)




// trim method for string

// let day = "      how are you             "
// let day = "how are you             "
// let res = day.trimStart()
// let res = day.trimStart()
// let res = day.trimEnd()
// console.log(res)




// padd a string method 


// let padtext = "5"
// let res = padtext.padStart(4, "0")
// console.log(res)




// debit card example for paddstart 

// let debit = "1234"
// // let check = debit.padStart(16, "*")
// let check = debit.padEnd(16, "*")
// console.log(check)




// REPEAT METHOD   

// let rep = "repeate this string almost 5 times a day "
// let ans = rep.repeat(5)
// console.log(ans)



// replace 


// let rep = "hello can you replace this sign !!"
// let yes = rep.replace("!!" , "yes")
// console.log(yes)



// let visit = "can you visit W#DFHD"
// let ok = visit.replace(/W#DFHD/i , "w3school")
// console.log(ok)


// replace where this phasrs match for all two argumnts target and replace 
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)



// NUMERIC
let x = "100";
let y = "10";
// let z = x / y;
let z = x * y;
console.log(z)



// bigint 
let largeNumber = BigInt("12345678901234567890");

// Conversions
let num = Number(largeNumber);
console.log(num)
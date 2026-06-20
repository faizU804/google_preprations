// here we learn about loops 

// // here is syntx 
// let i = 4
// for ( i = 0 ; i < 5 ; i++){

// }




//here is the for loop proper example 

// let cars = ["volvo" , "honda" , "BMW", "TUNDRA", "SONATA", "ROLLS RICE"]

// let len = cars.length;

// let text = ""

// for(let i = 0; i < len ; i++){
//     text += cars[i]  
// }




// you can oimmit the exp 1

// let cars = ["volvo" , "honda" , "BMW", "TUNDRA", "SONATA", "ROLLS RICE"]

// let len = cars.length;

// let text = ""

// let i = 0

// for(; i < len ; i++){
//     text += cars[i]  
// }

// console.log(text)







// Here is another example do while loop 
    // let text = ''
    // let i = 9
    // let i = 0
    // do{
    //     text = "The number is " + i;
    //     i++
    // }
    // while(i <= 10)

    //     console.log(text)





    // Break in Loops 
    let text = ''
    for (let i = 0; i < 10; i++){
        // nested loop but with break 
        if(i === 3) {break}
        text += "This number is -- " , i 
    }

    console.log(text)



    // leabel with continue 

    loop1:for(let j = 0; j<10; j++ ){
       loop2:for(let i = 0; i < 5; i++){
        if(i ===3) {continue loop2;}
            text += i
       }
    }
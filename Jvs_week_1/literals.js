let price  = 22.1
let VAT = 2.1

let total = `here is total bill : ${price * (1 + VAT).toFixed(2)}`
console.log(total)
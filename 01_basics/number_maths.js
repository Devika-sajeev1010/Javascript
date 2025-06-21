// let balance = 3827485.798
// console.log(balance.toString().length);
// console.log(balance.toFixed(2))// number of values after decimal must be fixed to 2 places
// let another= 33.42
// console.log(another.toPrecision(2));//returns a string which contains a number either in exponential or fixedpoints.                                                                                                                  )

console.log(Math) // math is an inbuilt function in JS
//  You don’t instantiate Math with new Math()
//  — you just use its properties directly.
console.log(Math.abs(-5))
console.log(Math.round(67.98))
console.log(Math.random())// random , by default always takes value between 0 and 1
console.log(Math.random()*10+1)//to get a random number more than 1 
// multiply 10 and add 1

const a= 10
const b= 20
// now if we want random numbers between 10 and 20 then 
console.log(Math.floor(Math.random()*(a-b+1)) + a)
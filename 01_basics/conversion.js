let score = 33
console.log(typeof score)
console.log(typeof(score))
let score1 = "33qqq"
console.log(typeof score1)

let value = Number(score1) //Number with n in capital is 
// used to fix the datattpe of a variable
// same goes with other variables
console.log(typeof(value))
console.log(value)
// now if we give a non numeric number into a variable and it is 
// then converted into a number ,
//  then conversion is possible in JS , but the actual value will be NaN - not a number
// if the variable is assigned with null then the value will ne 0 and if 
// it is undefined then the value will be NaN

// in java script the comparison of two different datatypes is unpredictable
console.log("2" > 1)
console.log(2 > "5") // in this both string datatypes are converted into integers
// it js coercion behaviour
console.log(null > 0) //false
console.log(null == 0) // false
console.log(null >= 0) //true
// the reason behind this is that in js the equality check (==) and the comaprison
//  check ( <, > , <=, >=) works differently
// comparison check converts null to 0 and in equality check null
//  loosely represent undefined and not 0 

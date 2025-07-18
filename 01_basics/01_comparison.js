// in java script the comparison of two different datatypes is unpredictable
console.log("2" > 1)
console.log(2 > "5") // in this both string datatypes are converted into integers
// it is js coercion behaviour
console.log(null > 0) //false
console.log(null == 0) // false
console.log(null >= 0) //true
// the reason behind this is that in js the equality check (==) and the comaprison
//  check ( <, > , <=, >=) works differently
// comparison check converts null to 0 and in equality check null
//  loosely represent undefined and not 0 
//'10' > '5'	false (string comparison, lexicographic) - lexicograph In JavaScript,
//when both operands are strings, comparison like > or < is done lexicographically, i.e.,
//character by character, based on Unicode values, NOT numerically.
//Objects and arrays are compared by reference, not value.
// const a = { name: "JS" };
// const b = { name: "JS" };

// a == b     // false (different memory references)
// a === b    // false
// a === a    // true

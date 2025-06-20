let name = "Devika"
let stream = "Computer science"
console.log(`My name is ${name} and my stream  is ${stream}`)
console.log( name + " from stream " + stream) // outdated syntax for conactenation 
// should not be practiced

const a = new String ("hello") //This creates a String object, not a primitive string.
console.log(a[0]) // Even though a is an object, JavaScript lets you access characters 
// by index, similar to a normal string.
console.log(a.toUpperCase())
console.log(a.charAt(4))

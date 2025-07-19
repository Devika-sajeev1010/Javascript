//higher order array
const arr = [1,2,3,4,5];
for (const i of arr)  // forof loop 
    {
   // console.log(i);
    
}
//also works on strings
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
    
}
// for loop
// Uses an index to loop.
// Works with arrays, strings, or any iterable if accessed by index.
// Gives full control over the loop (start, end, step).
// Useful when you need the index.
// for...of loop
// Simpler syntax for looping over iterables (like arrays, strings, sets, maps).
// You don’t get the index directly.
// Used when you only care about the values, not their position.
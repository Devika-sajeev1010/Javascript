// IIFE stands for Immediately Invoked Function Expression.
// It is a function that runs as soon as it is defined.

// wrap the function in parentheses () to turn it into a function expression.
// Then you add another pair of parentheses () to invoke it immediately.

//advantages
//Avoid polluting the global scope
// Create a private scope
// Useful in older JavaScript (before let, const, and modules existed) to isolate variables.
// Useful in modular patterns or initialization logic
(function() {
    // code inside IIFE
    console.log("This runs immediately!");
})();

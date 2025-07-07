//  this and arrow functions (=>) are deeply connected concepts, especially 
// when it comes to how they manage context (i.e., the value of this inside 
//  a function).

// Common Cases:
// 1. In a regular function
function show() {
  console.log(this);
}
show(); // In browsers: `this` refers to the global object (i.e., `window`)

// 2. Inside an object method
const obj = {
  name: "Devika",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // "Devika" — here `this` refers to `obj`

//3. Alone in strict mode
"use strict";
function show() {
  console.log(this);
}
show(); // `this` is `undefined` in strict mode

//4. In event handlers (DOM)
button.addEventListener('click', function() {
  console.log(this); // the button element itself
});

// Arrow Function (=>)
// Arrow functions do not have their own this. They inherit this from the
//  surrounding lexical context (where they were defined).

const obj = {
  name: "TaskTide",
  greet: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet(); // "TaskTide" — arrow function inherits `this` from `greet`

//But if it were a regular function:

greet: function () {
  const normal = function() {
    console.log(this.name);
  };
  normal(); // `this` would be undefined or global
}


"use strict"; // treat all js code in newer version
//alert("Hello") // wont work because we are using node js and not browser
//(alert is used to generate a pop up message )

/* datatypes (primitive / immutable– you can’t change them directly.)
//These are the most basic data types. They store single values and are copied by value.
1. number = 2^53
2. bigint = for larger numbers
3. string = ""
4. boolean = true/false
5. null = a standalone value (its type is - object)
6. undefined = whose value is not specified

(non primitive-mutable)
//These store collections of values or complex entities. They are copied by reference.

object
*/
 console.log(typeof(null)) // output is object -(a draw back of js even though null 
                           // is not an object ..becuase in earlier versions of 
                           // js the type tag of both null and object were given as 0)
// Object	{name: "Devika", age: 21}	Key-value pairs
// Array	[1, 2, 3]	Ordered list of values
// Function	function() {}	Block of reusable code
// Date	new Date()	Built-in object to handle dates/times
// RegExp	/\d+/	Regular expressions
// Map, Set	new Map(), new Set()	Advanced collections

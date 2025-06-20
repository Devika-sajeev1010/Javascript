// stack used for primitive datatype and heap used for non primitive datatype
//stack
let a = "Devika"
let b = a
console.log(b);
 b ="Divya"
console.log(a);
console.log(b); // in this the changes are made in the copy and not the original value

//heap
let userone = {
    name: "Devika",
    age: 20
}
console.log(userone)
let usertwo = userone

usertwo.name = "Divya"
console.log(usertwo)
console.log(userone) // in this the changes are directly made at the address 
// on which the data is saved .  so e have no access to the previous value now.
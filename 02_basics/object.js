//object literals
const mysym = Symbol("Key1")
const jsuser = {
    name : "Aman",
    mysym : "mykey1", // initialize symbols like this - [mysum] : "mykey1"
    age : 20,
    email : "aman@gmail.com",
    location :"Jaipur",
    loggedIn : ["Monday" , "Saturday"]
}
console.log(jsuser.age)
console.log(jsuser["age"])
// both are the ways through which we can access the elements of the object

console.log(jsuser.mysym)// with this syntax even though we can access 
// mysum but type of mysum will not be symbol but string

console.log( typeof(jsuser.mysym)) // string-  which is wrong in this case as 
// we have declared it as a symbol

console.log(jsuser[mysym])
console.log( typeof(jsuser[mysym]))

// to change the values
jsuser.email= "Aman@gpt"
console.log(jsuser)
Object.freeze(jsuser)
jsuser.email= "Aman@gpta" // this change will not occur
console.log(jsuser)

jsuser.greetings = function(){
    console.log("Hello js user");
}
jsuser.greetings_2 = function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greetings())
console.log(jsuser.greetings_2())
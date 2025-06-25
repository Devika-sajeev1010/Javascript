//const facebook = new Object() // a singleton oject
const facebook = {} // two ways, not a singleton object
console.log(facebook); 
facebook.id = 123
facebook.name = "Aman"
facebook.isloggedin = false
const whatsapp = {
    emailcom : "abc@gmail.com",
    fullname: { //nested object
        username:{
            firstname : "Aman",
            lastname : "Singh"
        }
    }
}
console.log(whatsapp)
const obj1 = { 1:"a" , 2:"b" } 
const obj2 = { 3:"a" , 4:"b"}//The + operator is not valid for merging objects in JavaScript. 
// When you use obj1 + obj2, JavaScript converts both objects to strings:
//const obj3 = obj1 + obj2
//console.log(obj3)
//so either use spread operator or Object.assign
//const obj3= Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3)
console.log(Object.keys(facebook)) // note that the dataype of the keys is array in tha output



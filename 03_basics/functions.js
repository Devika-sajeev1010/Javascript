function addition( num1 , num2)// no need to give the datatypes of the parameters
{
    console.log(num1 + num2);
    
}
const result1 = addition(78 , 99) //177
//addition(78 , "99") // 7899 js by default will consider it as strings
//addition(22 , "a") //22a will not give any error
//addition(22 , null) // 22 .. at this point it will not check any condiotions
//  as we have not used any conditions (if-else)
//console.log(result) // undefined - because there is no return statement in the function
function addition1( num1 , num2)// no need to give the datatypes of the parameters
{
    let result = num1+num2
    return result
    console.log("Dev") // this will never get printed as it is undetectable now as we have used return
    
}
const result = addition1(78 , 99) 
console.log("result is:" , result)
//another way
function loginusermsg(username)
{
    return `${username} logged in`
}
console.log(loginusermsg("Dev")) // if nothing is passed the will print undefined logged in
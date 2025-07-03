function one() 
{
    const user = "ABC"

    function two()
    {
        const user1 = "XYZ"
        console.log(user);
        
    }
    //console.log(user1) // it wil show error as it is outside the scope  
    // - if this line is commented then two() is called 
    // and it will print ABC as the function two() can access the 
    // members of function one()

    two()
}
one()

add(8)
function add(num)
{
    return num +1
}
//add(8) so - if we declare a function in this syntax and call the function 
// before its declaration then it will not produce any error

a(8)
const a = function add1(num)
{
  return num +1
}
// a(8) but in this syntax it will produce error
//Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before the code is executed.
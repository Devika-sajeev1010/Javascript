//JS EXECUTION CONTEXT
//global ec will always be there using this pointer
// function ec
// phases is 
//1 global ec
//2 memory creation phase
//3 execution phase
// in memory phase = first of all, all variables are initialised undefined  and for the function , its definition is stored
// after the memory phase the executio phase occirs where the values are assigned to the variables and for the functions,
// whenever a function is called a new execution context is created , whuch consist of a new variable environment 
// and execution thread, this execution thread is called everytime the function is executed
// and then the memory phase and execution phase will agai take place for that particular function each time it is called
// once teh environment context has completed its work, it gets deleted 
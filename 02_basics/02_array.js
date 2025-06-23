const marvel_heroes = ["Ironman" , "'spiderman" ,"Hulk"]
const dc_heroes = ["Batman" , "Flash" , "Superman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)// in this the sec array will be copied as it is..as an array\
// which means an array inside an array. as we know that in js array can 
// contain elements of different datatypes. so we dont get the correct or desired answer
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)

//another method - conacatenation
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)// concat returns a new array after making the changes
const all_new_heroes =  [ ...marvel_heroes, ...dc_heroes] // spread operator most commonly used
console.log(all_new_heroes)

let arr = [1,2,3,4 ,[5,6,7], [8,9, [10 , 11]]]
const arr2 = arr.flat(Infinity) //The flat() method is used to flatten nested 
// arrays — it returns a new array with all sub-array elements 
// concatenated into it recursively up to a specified depth.
console.log(arr2)

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3))
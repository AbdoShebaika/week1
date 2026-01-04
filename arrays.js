//question_1
const movies = ["friend","john wick","black banter"]
movies.push("baby driver")
console.log(movies)


//question_2
 let colors = ["red", "blue", "green"]
 colors.shift()
 colors.push("red")
 console.log(colors)


//question_3
const  groceries =["eggs","milk","water"]
console.log(groceries.includes("milk"))


//question_4
const fruits = ["Orange", "Apple", "Banana"]
console.log(fruits.indexOf("Orange"))


//question_5
const array =  ["HTML", "CSS", "JS"]
console.log(array.join(" "))


//question_6
const numbers =  [1, 5, 10]
const double = numbers.map(number=>number*2)
double.forEach(number=>console.log(number))
console.log("\n")


//question_7
const ages =  [10, 25, 8, 15, 40]
const adults = ages.filter(age=>age>=20)
adults.forEach(adult=>console.log(adult))


//question_8
const letters =  ["a", "b", "c", "d", "e"]
console.log(letters.slice(1,4))


//question_9
let names = ["Alice", "Bob", "Charlie"]
let greeting = names.map(name=>"Hello "+name)
greeting.forEach(name=>console.log(name))


//question_10
let digit = [3,5,1,55]
console.log(digit.reverse())
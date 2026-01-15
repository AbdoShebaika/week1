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
console.log("\n\n")

console.log("part_2")
console.log("=======")

//question_1
const user =  [{id: 1, name: "A"}, {id: 2, name: "B"}]
console.log(user.find(user=>user.id===2))



//question_2
const mapper = [{name: "Bread", price: 2}, {name: "Milk", price: 3}]
const prices = mapper.map(price=>mapper.price>=2)
mapper.forEach(price=>console.log(price))



//question_3
const chain =  [1, 2, 3, 4, 5, 6]
const even = chain.filter(num=>num%2 === 0) 
const nums = even.map(s_even=>s_even*s_even)
nums.forEach(s_even=>console.log(s_even))


//question_4
const animals =  ["Zebra", "Apple", "Mango"] 
console.log(animals.sort())


//question_5
const numberof = [100, 5, 22, 8]
console.log(numberof.sort((a,b)=>a-b))


//question_6
const months =  ["Jan", "Feb", "April"]
months.splice(3,3,"March")
console.log(months)


//question_7

//question_8

//question_9
const nemiro = [10, 15, 20, 25]
//const ev = nemiro.filter((n,z)=>n%2===0,z)



//question_10
const f = [" apple ", " BANANA", "cherrY "]
const r = f.map(x=>x.toLowerCase())
console.log(r)

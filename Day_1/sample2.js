
//object
let student = {
    name: "siva",
    roll: 151,
    age: 19
}
console.log(student.name)

for (let key in student) {
    console.log(key + " " + student[key])
}

// age using ternary operator
let age = 18
let vote = (age >= 18) ? "Allowed" : "Not allowed"
console.log(vote)

//arrow function
// this is not used in arrow function
let add = (a, b) => { console.log(a + b) }
add(1, 2)


//spread operator
// const a = [1,2,3,4,5]
// const b = [6,7,8,9,10]
// const all = [...a, ...b]
// console.log(all)

// let student1={
//     name:"siva",
//     age:21
// }

// let details = {
//     ...student1,
//     city : "Tirupur"
// }
// for (let key in details){
//     console.log(key +"=" +details[key])
// }

//array destructuring

const num = [1, 2, 3]
const [a, b, c] = num
console.log(a, b, c)

const [first, , third] = num
console.log(first, third)

const [x, y, ...rest] = num;
console.log(x, y)
console.log(rest)

//Object destructuring
const person = { name: "Siva", age: 25, city: "chennai" }
const { name, age1 } = person
console.log(name, age1)

//MAP
const num1 = [1, 2, 3, 4, 5]
const square = num1.map(num1 => num1 * num1)
console.log(square)

//Filter
const n = [1,2,3,4,5]
const even = n.filter(n=>n%2==0)
console.log(even)

//Reduce
const n1 = [1,2,3,4,5]
const sum = n1.reduce((a,b) => a+b,0)
console.log(sum)

//
function sum(...numbers){
    return numbers.reduce((a,b)=> a+b,0)
}
console.log(sum(1,2,3))



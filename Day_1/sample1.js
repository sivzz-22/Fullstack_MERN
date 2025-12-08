
// variable declaration
let name = "Siva";
const age = 21;
var country = "India";

//Arithmetic operation
var c = 5 + 6
console.log(c)
console.log(c == 11)

//Assignment operation
var a = "10";
var b = 10;
console.log(a == b)
console.log(a === b)

//Function declaration
function geet(name) {
    console.log("Hello: " + name)
}
geet("Siva")

//Function to find major or minor
function vote(age) {
    if (age < 18) {
        console.log("Minor")
    }
    else {
        console.log("Major")
    }
}
vote(25)

//for loop
for (i = 0; i <= 4; i++) {
    console.log(i)
}

//Array

//Hoisting
console.log(x)
var x = 10 // for using var we get undefined

// console.log(x)
// let x = 10       // for using let we get error

//const

// const y = 25
// y = 30           //ERROR:assigned error

// use let and const dont use var


// null and undefined
let q = null;
let q1;
console.log(q)
console.log(q1)

// switch condition
var a = "apple"
switch (a) {
    case "Apple":
        console.log("Apple is selected")
        break
    case "apple":
        console.log("apple is selected")
        break
    case "orange":
        console.log("Orange is selected")
        break
    default:
        console.log("Not found")
}



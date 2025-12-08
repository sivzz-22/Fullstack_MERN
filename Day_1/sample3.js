//ARRAYS AND STRING OPERATION

const arr = [1, 2, 3]
arr.push(4)
console.log(arr)
arr.push(5, 6)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift(1) // Removes first element
console.log(arr)

console.log(arr.length)

let str1 = "Sujith"
let str2 = "Sujith"
console.log(str1.includes(str2))
console.log(str1.concat(",", str2))
console.log(str1.substring(0, 3))
console.log(str1.toUpperCase())
console.log(str1.indexOf("u"))
console.log(str1.toLowerCase())

const add = (a,b)=>a+b
const subtract = (a,b)=>a-b
const multiply  = (a,b)=>a*b
const divide  = (a,b)=>a/b

const greet = ()=>console.log("hello")

// module.exports = greet

module.exports = {
    add,
    subtract,
    multiply,
    divide
}

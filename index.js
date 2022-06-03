const fs = require('fs')

const obj = {
    brand: "Mercedes",
    model:"AMG Project One",
    make:'2022'
}

// const d = fs.writeFile('data.json',JSON.stringify(obj),(err)=>console.log(err))

// const data = fs.readFileSync('data.json',{encoding:"UTF-8"})
// console.log(data)
// fs.readFile('data.json',{encoding:"UTF-8"},(err,data)=>{
//     console.log(data)
// })
// console.log(1)

fs.rm('daa.json',(err)=>{console.log(err)})

// console.log(JSON.parse(data))

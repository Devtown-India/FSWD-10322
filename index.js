const fs = require('fs')
const util = require('util')

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

const removeFilePromisified = util.promisify(fs.rm)

try {
    const d = removeFilePromisified(('daa.json'))
} catch (error) {
    console.log(error)
}

// console.log(JSON.parse(data))

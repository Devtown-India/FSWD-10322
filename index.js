const http = require('http')
const fs  = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        const data = fs.readFileSync(path.join(__dirname,'/public/home.html'))
        res.write(data)
    }else if(req.url==='/about'){
        const data = fs.readFileSync(path.join(__dirname,'/public/about.html'))
        res.write(data)
    }
    res.end()

})

server.listen(8080)
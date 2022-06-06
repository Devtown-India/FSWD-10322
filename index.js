const http = require('http')
const fs  = require('fs')
const path = require('path')
const os = require('os')

const server = http.createServer((req,res)=>{
   
    res.writeHead(403,{
        "customm":"custom value",
        "date": new Date().getDate(),
        version: os.version()
    })

    if(req.url==='/'){
        const data = fs.readFileSync(path.join(__dirname,'/public/home.html'))
        res.write(data)
    }else if(req.url==='/about'){
        const data = fs.readFileSync(path.join(__dirname,'/public/about.html'))
        res.write(data)
    }else if(req.url==='/photo'){
         const data = fs.readFileSync(path.join(__dirname,'/public/f1-75.jpeg'))
        res.write(data)
    }
    res.end()

})

server.listen(8080)
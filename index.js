const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('response')
})

app.listen(8080,()=>{
    console.log(`server started at Port: ${8080}`)
})
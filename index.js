const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.get('/contact',(req,res)=>{
    res.send('contact page')
})


app.listen(8080,()=>{
    console.log(`server started at Port: ${8080}`)
})
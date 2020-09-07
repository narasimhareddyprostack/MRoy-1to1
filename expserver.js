const express = require('express')
const app = express()
app.get('/',(req,res) =>{
    res.send("<h1> Welcome to PSA</h1>")
})

app.get('/about', (req,res) =>{
    res.send("<h1>About Page</h1>");
})

app.get('/services', (req,res) =>{
    res.send("<h1>Services Page</h1>");
})


app.get('/order/', (req,res) =>{
    const id = req.params.id;
    res.send("<h1>Your Product</h1>"+id);
})

app.get('/order/:id',(req,res)=>{
    const id = req.params.id;
    res.send("Your Order ID:"+id)
})

app.listen(6500,(err)=>{
    console.log("Express Server Running...");
})



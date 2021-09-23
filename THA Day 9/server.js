const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();

// app.set("views", path.join(__dirname + '/views'))
// app.set('view engine', 'jade');

app.use('/images/:id',(req, res)=>{
    // res.sendFile(path.join(__dirname + '/public/hello.txt'),'test.txt');
    // res.sendFile(path.join(__dirname + '/public/hello.json'),'test.txt');
    // res
    // .status(201)
    // .cookie("hello", "hello")
    // .redirect(301, '/admin');
    res.sendFile(path.join(__dirname + '/public/'+ req.params.id));
})

app.listen(3000,()=>{
    console.log("Server open on 3000")
})
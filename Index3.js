const express = require('express');
require ('./config');
const product = require('./product');

const app = express();
app.use(express.json())    //converts the data into JSON formate forom stream   formate

app.post("/create" , async (req,res)=>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

const port= 8000;
app.listen(port);
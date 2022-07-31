const express = require('express');
require ('./config');
const product = require('./product');

const app = express();
app.use(express.json())    //converts the data into JSON formate forom stream   formate

//post  API using mongoose
app.post("/create" , async (req,res)=>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

//get API using mongoose
app.get("/list" , async(req,res)=>{
    let data = await product.find();
    res.send(data);
});

// delete Api using mongoose
app.delete("/delete/:_id" ,  async(req , res)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params);
    res.send(data);
});

// put API using mongoose
app.put("/update/:_id" , async(req , res)=>{
    console.log(req.params);
    let data = await product.updateOne(
        req.params , 
        {
            $set:req.body
        }
    );
    res.send(data);
});
const port= 8000;
app.listen(port);
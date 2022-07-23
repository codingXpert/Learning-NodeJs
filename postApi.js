const express = require('express');
const dbConnect = require('./dbConnFile');
const app = express();

//telling the node that we are using json data formate
app.use(express.json());

//get api
app.get('/' , async (req , res) => {
    let data =await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);

});


//post api
app.post('/' , async (req , res) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
});

//put api
app.put('/:xyz'  , async(req ,res)=>{
let data = await dbConnect();
let result = data.updateOne(
    {name:req.params.xyz} , 
    {$set:req.body}
)
res.send({result:"update"})
}) 

app.listen(8000); 
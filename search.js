const express = require('express');
require ('./config');
const product = require('./product');

const app = express();
app.use(express.json())    //converts the data into JSON formate forom stream   formate


//search API
app.get("/search/:key" , async(req,res)=>{
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or":[        //here "or" is used for multiple conditions
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
});

const port = 8000;
app.listen(port);
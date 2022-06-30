const express =require('express');
const path = require('path');
const port =5000;
 
const app = express();
const publicPath = path.join(__dirname , 'public');
console.log(publicPath);

//linking all the files of public folder to be render on browser
app.use(express.static(publicPath));

app.listen(port , (err) => {
    if(!err){
        console.log(`Server is running on the port::  ${port}`  )
    }
});

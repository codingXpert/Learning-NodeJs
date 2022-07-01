const express = require('express');
const path = require('path');

const port = 8000;
const app = express();
const publicPath = path.join(__dirname , 'public');

 app.get('/index' , (req , res)=>{
 res.sendFile(`${publicPath}/index.html`);
 });

 app.get('/about' , (_ , res) => {
    res.sendFile(`${publicPath}/about.html`);
 });

 app.get('' , (_ , res) => {
    res.sendFile(path.join(`${__dirname}/home.html`));
 });

//rendering the 404 page 
app.get('*' , (_ ,res) =>{
    res.sendFile(path.join( `${__dirname }/404.html` ))
});

app.listen(port , (err) => {
    if(!err){
        console.log(`Server is running on the port:: ${port} `);
    }
});
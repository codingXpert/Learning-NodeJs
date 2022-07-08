const express = require('express');
const reqFilter = require('./middlewareFile');
const app = express();

app.get('/' , (req,res) => {
    res.send('<h1>Welcome to home page</h1>');
});


//appliying middleware on single route
app.get('/user' , reqFilters , (req , res) => {
    res.send('<h1>Welcome to users page</h1>')
});

app.listen(8000 , (err) => {
    if(!err){
        console.log('Server is running on the port::8000');
    }
});
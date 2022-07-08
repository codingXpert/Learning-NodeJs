const express = require('express');
const reqFilter = require('./middlewareFile');
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get('/' , (req,res) => {
    res.send('<h1>Welcome to home page</h1>');
});

app.get('/help' , (req,res) => {
    res.send('<h1>Welcome to help page</h1>');
});

//Applying  Middleware by using route
route.get('/user' , (req , res) => {
    res.send('<h1>Welcome to users page</h1>')
});

route.get('/about' , (req , res) => {
    res.send('<h1>Welcome to about page</h1>')
});

app.use('/' , route);


app.listen(8000 , (err) => {
    if(!err){
        console.log('Server is running on the port::8000');
    }
});
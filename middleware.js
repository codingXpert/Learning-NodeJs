const express = require('express');
const app = express();


//creating a middleware
const reqFilters = (req , res , next) => {
    if(!req.query.age){
        res.send('<h1>Please Provide Age</h1>');
    }

    else if(req.query.age < 18){
res.send('<h1>You can not access this page</h1>');
    }

    else{
        next();
    }
}

//Using Middleware
app.use(reqFilters); 

app.get('/' , (req,res) => {
    res.send('<h1>Welcome to home page</h1>');
});

app.get('/user' , (req , res) => {
    res.send('<h1>Welcome to users page</h1>')
})

app.listen(8000 , (err) => {
    if(!err){
        console.log('Server is running on the port::8000');
    }
});
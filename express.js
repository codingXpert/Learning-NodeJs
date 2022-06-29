const express = require('express');
const app = express();


app.get('' , (req , res) => {
    res.send('<h1>Welcome , this is home page</h1>');
});

app.get('/about' ,  (req , res) => {
    res.end('<h1>Welcome , this is about page</h1>');
});

app.get('/help' , (req , res) => {
    res.send('<h1>Welcome this is help page</h1>');
})

app.listen(8000 , () => {
    console.log('Server running on the port 8000')
}); 
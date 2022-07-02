const express = require('express');


const port = 8000;
const app = express();

//Telling Node Js that ue are using view engine of ejs
app.set('view engine' , 'ejs');

app.get('/' , (req , res) => {
    res.render('home');
})

app.get('/profile' , (req , res) => {
    user = {
         name:'Anil',
         email:'anil@gmail.com',
         city:'Noida'
    }
    res.render('profile');
});


app.listen(port , (err) => {
if(!err){
    console.log(`Server is running on the port::${port}`);
}
});




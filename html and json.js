const express = require('express');
const app = express();
const port = 8000;


app.get( '/' , (req , res) => {
     res.send(`
     <h1>Welcome , this is home page</h1>
     <input type = "text" placeholder = "user name" />
     <button> Click Me </button>
     <a href = '/about'> Go To About </a>
     `);
});

app.post('/about' ,  (req , res) => {
    res.end(`<h1>Welcome , this is about page</h1>
    const data = [
        {
            name:"vivek",
            2 : "two"
        } ,

        {
            "name":"vivek",
            "addr" : "xyz"
        }
    ]
    <a href = '/' > Go To Home </a>
    `)

    console.log(req.body)

    
});

app.get('/help' , (req , res) => {
    res.send('<h1>Welcome this is help page</h1>');
})



app.listen(port , (err) => {
    if(err){
        console.log(`Error while connecting to server ${err} on PORT ${port}`);
        return;
    }
    console.log('Server running on the port' , port);
}); 
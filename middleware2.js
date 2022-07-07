const express = require("express");
const app = express()
 
// Creating First Middleware
app.use("/", (req, res, next) => {
    if(req.query.age == 10)
    res.send("<h1>Hello</h1>");

    // The next() function called
    else
    next();
})
 
// Creating second middleware
app.get("/", (req, res, next) => {
    res.send(`
    <h1>Get Request</h1>
    <style>
    h1{
        color:red
    }
    </style>
    `)
})
 
// Execution the server
app.listen(8000, () => {
    console.log("Server is Running")
})

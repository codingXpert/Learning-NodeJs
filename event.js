//counting how many times the API is called using EventEmmiter

const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();
let count =0;


app.get('/' , (req , res)=>{
    res.send('api called');
    event.emit("countAPI");    //generating/triggering an event having name "countAPI"
});

app.get('/search' , (req , res)=>{
    res.send('search api called');
    event.emit("countAPI");  
});

app.get('/update' , (req , res)=>{
    res.send('update api called');
    event.emit("countAPI");  
});

//handelling the generated event
event.on("countAPI" , ()=>{
    count++;
    console.log("event called" , count);
})
 

app.listen(8000);
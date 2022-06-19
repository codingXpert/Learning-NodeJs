const http = require('http');

const dataControl = (req , res) => {
    res.write("<h1>Server is running on Port 8000</h1>");
    res.end();
}
http.createServer(dataControl).listen(8000);

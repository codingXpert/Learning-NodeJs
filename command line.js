const fs = require('fs');
var input = process.argv;
fs.writeFileSync(input[2] , input[3]); 




// in terminal write file_name from where we are creating new file as follows
// node '.\command line.js' apple.txt 'this is fruit'

// And this will create a new file with name apple.txt and data inside it "this is fruit"
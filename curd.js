const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname , 'curd');

const filePath = `${dirPath}/hello.txt`;

// Creating a file
fs.writeFileSync(filePath , 'this is a simple text');

// reading the file
fs.readFile(filePath , "utf8" , (err , item) => {
    console.log(item);
})

// appending a file
fs.appendFile(filePath , ' and this an apple.txt file' , (err) => {
    if(!err)
    console.log('file is updated');
} );

//renaming the file
fs.rename(filePath ,  `${dirPath}/fruit.txt` , (err) => {
    if(!err)
    console.log('file name is updated')
});

// deleting the file

//fs.unlinkSync(`${dirPath}/fruit.txt`);


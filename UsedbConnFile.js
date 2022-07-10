const dbConnect = require('./dbConnFile');

//handling the returned promise using promise

dbConnect().then((res) => {
    res.find().toArray().then((data) => {
        console.log(data);
    });
});



//handling the returned promise using async-await

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();

console.log('********#############*********');
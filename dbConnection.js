const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database  = 'e-comm';
const Client = new MongoClient(url);


//connecting to database
async function getData(){
    let result = await Client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response =  await collection.find({}).toArray();

    console.log(response);
}

getData();
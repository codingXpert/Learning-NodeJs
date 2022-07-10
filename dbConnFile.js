const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database  = 'e-comm';
const Client = new MongoClient(url);


//connecting to database
async function dbConnect(){
    let result = await Client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = dbConnect;

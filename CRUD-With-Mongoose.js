const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/e-comm");

  //Defining the schema of db
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
  });

  //defining/creating model for the db
  const insertInDB = async ()=>{
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "m 10",
    price: 1000,
    brand: "maxx",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
  }

// Update in DB
const updateIndb = async()=>{
    const Product = mongoose.model('products' ,  productSchema);
    let data = await Product.updateOne(
        {name:"m 10"}, //condition

        {
        $set:{price:750, name:"max 8"} //data to be updated
        }  
  )
  console.log(data);
}

//Delete the record
const deleteInDB = async ()=>{
    const Product = mongoose.model('products' , productSchema);
    let data = await Product.deleteOne({name:'max 8'});
    console.log(data);
}

//Reading the records
const findInDB = async ()=>{
    const Product = mongoose.model('products' , productSchema);
    let data = await Product.find();
    console.log(data);
}

//Reading any specific record
const findOneInDB = async ()=>{
    const Product = mongoose.model('products' , productSchema);
    let data = await Product.find({name:'m20'});
    console.log(data);
}
updateIndb ();
deleteInDB(); 
findInDB();
findOneInDB();

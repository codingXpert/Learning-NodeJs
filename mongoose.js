const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  //Defining the schema of db
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
  });

  //defining model for the db
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "m 10",
    price: 1000,
    brand: "maxx",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

main();

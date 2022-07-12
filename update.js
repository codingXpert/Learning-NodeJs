const dbConnect = require("./dbConnFile");

const updateData = async  () => {
  let data =  await dbConnect();
  let result =  await data.updateOne(
    { name: "max 1" },
    { $set: { name: "max pro", price: 550 } }
  );


  //Update/modify all record having name max 1
//   let data = dbConnect();
//   let result = data.update(
//     { name: "max 1" },
//     { $set: { name: "max pro", price: 550 } }
//   );
console.log(result);
if(result.acknowledged){
    console . log('******Record updated*******');
}
}

updateData();


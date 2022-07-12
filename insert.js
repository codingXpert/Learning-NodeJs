const dbConnect = require('./dbConnFile');

const insert = async()=>{
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name:'max 1' , brand:'micromax' , price:'220' , category:'mobile' },
            {name:'max 2' , brand:'micromax' , price:'320' , category:'mobile' },
            {name:'max 3' , brand:'micromax' , price:'420' , category:'mobile' }
        ]
    );

    if(result.acknowledged){
        console.log("Data inserted");
    }

    else{
        console.log("Error!!!!!");
    }
}

insert();


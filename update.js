const dbConnect = require('./mongodb');

const updateData = async ()=>{
    const data = await dbConnect();
    const result = await data.updateOne(
        {
            name: 'B'
        },
        {
             $set:{name: 'Q'}
    
        }
    )
    console.log(result);
}

updateData();
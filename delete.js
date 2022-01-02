const dbConnect = require('./mongodb')


const deleteData = async ()=>{
    const data = await dbConnect();
    const result = await data.delete(
        {
            name: 'C'
        }
    )
    console.log(result);
}

deleteData();
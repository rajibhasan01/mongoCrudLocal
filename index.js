const dbConnect = require('./mongodb')


const main = async () =>{
  const collection = await dbConnect();
  const data = await collection.find().toArray();
  console.log(data)
}

module.exports = main;


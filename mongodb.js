const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'hr-leave-mgt';

const client = new MongoClient(url);


async function dbConnect()
{
  const connect = await client.connect();
  const db = connect.db(databaseName);
  return db.collection('employee');

}

module.exports = dbConnect;
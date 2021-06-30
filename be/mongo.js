const { MongoClient } = require("mongodb");
const hostname = "localhost";
// const hostname = "mongoContainer";
const url = `mongodb://${hostname}:27017/?readPreference=primary&appname=node&ssl=false`;
let _database = null;

const createConnection = async () => {
  const client = new MongoClient(url);
  await client.connect();
  _database = await client.db("chatDb");
};

const getInstance = async () => {
  if (!_database) {
    await createConnection();
  }
  return _database;
};

const insertData = async (chat) => {
  const database = await getInstance();
  const data = JSON.parse(chat);
  database.collection("chat").insertOne(data, (err, res) => {
    if (err) Promise.reject(err);
    Promise.resolve(res);
  });
};

const getData = async () => {
  const database = await getInstance();
  return await database.collection("chat").find().toArray();
};

module.exports = { insertData, getData };

import mongoose from "mongoose";
import "dotenv/config";
async function connnectMongoose() {
  const _pwd = process.env.MONGO_DB_PW;
  const _database = "grupo-cinco-list"; // kann für diese Aufgabe so bleiben
  const _user= "Nastja";
  const _cluster = "cluster0.wi17b.mongodb.net";
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
 
  try {
    await mongoose.connect(_uri);
    const collections =  (await mongoose.connection.db.listCollections().toArray()).map(el => el.name);
    console.log(`collections of '${_database}' db`, collections );
    return true;
  } catch (error) {
    console.error('Could not connect to mongoose', error);
    return false;
  }
}
export default connnectMongoose
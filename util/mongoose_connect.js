import mongoose from "mongoose";

async function connectToMongoose() {
    const _pwd = process.env.MONGO_DB_PWD;
    const _database = process.env.MONGO_DATABASE;
    const _user = process.env.MONGO_USERNAME;
    const _cluster = process.env.MONGO_CLUSTER;
    const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(_uri);
        const collections = (
            await mongoose.connection.db.listCollections().toArray()
        ).map((el) => el.name);
        console.log(`collections of '${_database}' db`, collections);
    } catch (error) {
        console.error("Could not connect to mongoose", error);
        return false;
    }

    return true;
}

export default connectToMongoose;
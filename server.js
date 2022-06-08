import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import connnectMongoose from "./util/connnectMongoose.js"
import fehler from "./routes/fehler.js"
import indexRouter from "./routes/index.js"

const app = express()

app.use(express.json());

const PORT = 3000;



if (await connnectMongoose()) {
app.listen(PORT, (err) => {
if (err) console.error(err);
console.log(`listening to Port ${PORT}`);
});
} 

app.use("/", indexRouter)

app.use (fehler)
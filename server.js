import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import connectMongoose from "./util/connectMongoose.js"
import fehler from "./routes/fehler.js"
import indexRouter from "./routes/index.js"

const app = express()

app.use(express.json());

const PORT = 3000;

if (await connectMongoose()) {
app.listen(PORT, (err) => {
if (err) console.error(err);
console.log(`listening to Port ${PORT}`);
});
} 

app.use("/", indexRouter)

app.use (fehler)

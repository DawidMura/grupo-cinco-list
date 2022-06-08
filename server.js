import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import connectToMongoose from "./util/mongoose_connect.js";
import fehler from "./routes/fehler.js";
import indexRouter from "./routes/indexRouter.js";


const app = express();

const PORT = 3000;

if(await connectToMongoose()) {
    app.listen(PORT, (err) => {
        if(err) console.error(err);
        console.log(`listening to port ${PORT}`)
    })
}

app.use("/", indexRouter);
app.use(fehler);
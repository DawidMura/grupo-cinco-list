import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import connectToMongoose from "./util/mongoose_connect.js";
import fehlerRoute from "./routes/fehler.js";
const app = express();

const PORT = 3000;

if (await connectToMongoose()) {
	app.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log(`listening to Port ${PORT}`);
	});
}

app.use(fehlerRoute);

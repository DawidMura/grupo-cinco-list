import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import connnectToMongoose from "./util/mongoose_connect.js";
const app = express();

const PORT = 3000;

if (await connnectToMongoose()) {
	app.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log(`listening to Port ${PORT}`);
	});
}

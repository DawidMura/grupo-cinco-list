import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import connectMongoose from "./util/mongoose_connect.js";
import fehler from "./routes/fehler.js";
import indexRouter from "./routes/index.js";
import personsRouter from "./routes/person.js";
import { body, validationResult } from "express-validator";
import { personValidatorSchema } from "./model/personValidatorSchema.js";
import { validateRequest } from "./middleware/validatorErrors.js";

import authRoutes from "./routes/auth-routes.js";

const app = express();

app.use(express.json());

const PORT = 3000;

if (await connectMongoose()) {
	app.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log(`listening to Port ${PORT}`);
	});
}

app.use("/", indexRouter);
app.use("/grupo5", personsRouter);

app.use(fehler);
app.use(authRoutes);

app.post("/grupo5", personValidatorSchema, validateRequest, (req, res) => {
	res.send(req.body);
},

);


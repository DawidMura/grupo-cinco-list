import express from "express";
import { registerSchema } from "../model/registerSchema.js";
import { loginSchema } from "../model/loginSchema.js";
import { validateRequest } from "../middleware/validatorErrors.js";
import { getPersons, addPerson, updatePerson, deletePerson, getOnePerson } from "../controller/controller.js";
import { login } from "../controller/auth-controller.js";

const router = express.Router();

router.post(
    "/register",
    registerSchema,
    validateRequest,
    addPerson
);

router.post(
    "/login",
    loginSchema,
    validateRequest,
    login
)

export default router;
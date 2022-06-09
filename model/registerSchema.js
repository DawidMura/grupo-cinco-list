import { body, check } from "express-validator";
import PersonSchema from "../model/person.js";

export const registerSchema = [
    body("email")
        .trim()
        .isEmail()
        .custom(email => {
            return PersonSchema.findUserByEmail(email)
        })
        .withMessage("Has to be valid email or email is already use")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 5 })
        .withMessage("Has to have at least 5"),
    body("name")
        .escape()
        .contains(" ")
        .withMessage("Please provide first and last name"),
];
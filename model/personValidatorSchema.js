import { body, check } from "express-validator";

export const personValidatorSchema = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("Has to be valid email")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 5 })
        .withMessage("Has to have at least 5"),
    body("name")
        .escape()
        .contains(" ")
        .withMessage("Please provide first and last name"),
    body("age")
        .isNumeric()
        .withMessage("Age must be a number"),
];
import { body, check } from "express-validator";


export const personValidatorSchema = [
    // body("email")
    // 	.trim() // Entfernt Leerzeichen am Anfang und Ende
    // 	.isEmail()
    // 	.withMessage("Has to be valid email") // bezieht sich immer auf den vorhergehenden Punkt
    // 	.normalizeEmail(),
    // body("password")
    // 	.isLength({ min: 5 })
    // 	.withMessage("Has to have at least 5 characters"),
    body("name")
        .escape() // maskiert Sonderzeichen wie <, >
        .contains(" ")
        .withMessage("Please provide first and last name"),
    // check("id") // check testet auch neben body auch params, query, headers (https://express-validator.github.io/docs/check-api.html)
    //     .isNumeric()
    //     .withMessage("ID muss eine Nummer sein")
    //     .isLength(8)
    //     .withMessage("Muss mindestens 8 zeichen sein"),
    // check("website")
    //     .isURL()
    //     .withMessage("Website muss eine gültige URL enthalten"),
    body("age")
        .isNumeric()
        .withMessage("Age must be a number"),
];
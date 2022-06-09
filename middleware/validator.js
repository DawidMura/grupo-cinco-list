import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        return next(); // ruf die nächste Middleware, also unsere eigene, auf
    } else {
        res.status(400).send({ errors: validationErrors.array() });
    }
};
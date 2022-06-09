import express from "express";
import { getPersons, addPerson, updatePerson, deletePerson, getOnePerson } from "../controller/controller.js";
import { validateRequest } from "../middleware/validatorErrors.js";
import { personValidatorSchema } from "../model/personValidatorSchema.js";

const router = express.Router();

router.route("/")
    .get(getPersons)
    .post(personValidatorSchema, validateRequest, addPerson)
router.route("/:id")
    .get(getOnePerson)
    .put(updatePerson)
    .delete(deletePerson);
export default router;

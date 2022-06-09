import express from "express";
import { getPersons, addPerson, updatePerson, deletePerson, getOnePerson } from "../controller/controller.js";

const router = express.Router();

router.route("/")
    .get(getPersons)
    .post(addPerson)


router.route("/:id")
    .get(getOnePerson)
    .put(updatePerson)
    .delete(deletePerson);
export default router;

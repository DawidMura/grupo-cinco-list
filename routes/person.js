import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
    res.send("hola grupo cinco");
});

export default router;
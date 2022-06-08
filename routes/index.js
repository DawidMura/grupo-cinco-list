import express from "express";


const router = express.Router()


router.get("/", (req, res)=>{
    res.send("Hola grupo cinco!")
})

export default router
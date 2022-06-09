import express from "express";
import bcrypt from "bcrypt";
import PersonSchema from "../model/person.js";

/**********************************
* 
* L O G I N 
* 
*/
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log({ password, email })

        let user = await PersonSchema.findOne({ email });


        if (!user || !password)
            return res.status(402).json({ error: "password or email don't exist" });

        const isCorrectPassword = await bcrypt.compare(password, user.password)
        console.log(isCorrectPassword);
        console.log(password, user.password);

        if (isCorrectPassword) {
            console.log("access allowed!");
            res.json({
                msg: "access allowed"
            })
        } else {
            console.log("access denied!");
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'server error' })
    }
}
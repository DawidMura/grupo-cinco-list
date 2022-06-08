import "dotenv/config";
import express from "express";
import connectToMongoose from "./utils/mongoconnect.js";
import fehlerRoute from "./routes/fehler.js"


const PORT = 3000;

const app = express();
app.get('/', (req, res) =>{
    res.send('Hallo grupo 5');
})

if(await connectToMongoose()) {
    app.listen(PORT, err => {
      if(err) console.error(err);
      console.log(`listening to Port ${PORT}`)
    })
  }
app.use(fehlerRoute);
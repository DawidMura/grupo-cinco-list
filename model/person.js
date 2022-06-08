import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: {
      type: Number,
      required: true,
      softskills:
         String,
      hardskills:
         String
      
  }
} );

export default mongoose.model("Person", PersonSchema);
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
    type: Array,
    softSkills: String,
    hardSkills: String
  }
});

export default mongoose.model("Person", PersonSchema);

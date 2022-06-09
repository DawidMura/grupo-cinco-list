import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: Number,
    required: true,
  },

  skills: {
    type: Array,
    softSkills: String,
    hardSkills: String
  },
  able_on: Date,

});

export default mongoose.model("Person", PersonSchema);

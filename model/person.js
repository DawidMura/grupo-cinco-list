import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  skills: {
    type: Array,
    softSkills: String,
    hardSkills: String
  },
  able_on: Date,

});


PersonSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
})


export default mongoose.model("Person", PersonSchema);

import mongoose from "mongoose"


skills: {
    type: Nummber,
    required: true,
    softskills: String,
    hardskills: String
}


export default mongoose.model("Person, PersonSchema")
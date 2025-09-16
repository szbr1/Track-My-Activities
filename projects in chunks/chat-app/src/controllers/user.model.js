import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userId   : {type: String,  unique: true, required: true},
    username : {type: String,  required: true}
})


const User = mongoose.model("users", userSchema);
export default User;
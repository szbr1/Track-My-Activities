import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 29,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    
},{
    timestamps: true
})

 const User = mongoose.model('user', userSchema)
 export default User;
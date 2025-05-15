import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    desc: {
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
}
)

const Todo = mongoose.model('Todo',todoSchema)

export default Todo;


import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true
     },
     artist: {
        type: String,
        required: true
     },
     imageUrl: {
        type: String,
        required: true
     },
     releaseYear: {
        type: Number, required: true
     },
     songs: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Song',
        required: true
    }]
}, {timestamps: true})

const Album = mongoose.model("Album", AlbumSchema)

export default Album;

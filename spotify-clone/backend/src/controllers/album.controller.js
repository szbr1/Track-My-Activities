import Album from "../models/album.model.js"

export const getAllAlbum = async (req,res,next)=>{
    try {
     const album = await Album.find()
      res.status(200).json(album)
    } catch (error) {
        next(error)
    }
}


export const albumById = async (req,res,next)=>{
    try {
        const {id} = req.params;
      const data = await Album.findById(id).populate("songs")
      res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}
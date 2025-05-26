import Song from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    return res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export const featuredSongs = async (req,res,next)=>{
    try {
      const data =  await Song.aggregate([
            {$sample: {size: 6}},
            {$project: {
                _id: 1,
                imageUrl: 1,
                title: 1,
                artist: 1,
                audioUrl: 1,
            }}
        ])

        return res.status(200).json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
};
// 1
export const getOneFunctionData = async (req,res,next)=>{
    try {
      const data =  await Song.aggregate([
            {$sample: {size: 4}},
            {$project: {
                _id: 1,
                imageUrl: 1,
                title: 1,
                artist: 1,
                audioUrl: 1,
            }}
        ])

        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
};
// 2
export const trending = async (req,res,next)=>{
    try {
      const data =  await Song.aggregate([
            {$sample: {size: 4}},
            {$project: {
                _id:1,
                imageUrl:1,
                title:1,
                artist:1,
                audioUrl:1,
            }}
        ])

        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
};

// 1 === 2 = true
import cloudinary from "../lib/cloudinary.js";
import Album from "../models/album.model.js";
import Song from "../models/song.model.js";


// cloudinary function 
async function dataSetter(file) {
  try {
    const data = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return data.secure_url;
  } catch (error) {
    console.error({ detailError: error });
    throw new Error("Cloudinary upload failed");
  }
}



//! Routes 

export const song = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json("Please upload all files");
    }
    const { artist, title, albumId,duration } = req.body;

    const imageFile = req.files.imageFile;
    const audioFile = req.files.audioFile;

    const imageUrl = await dataSetter(imageFile.tempFilePath);
    const audioUrl = await dataSetter(audioFile.tempFilePath);

    const newStore = await Song.create({
      artist,
      title,
      imageUrl,
      audioUrl,
      duration,
      albumId: albumId || null,
    });

    if (albumId) {
      try {
        await Album.findByIdAndUpdate(albumId, {
          $push: { songs: newStore._id },
        });
      } catch (error) {
        res.status(400).json("mongodb error");
        next(error);
      }
    }

    return res.status(200).json(newStore);
  } catch (error) {
    console.error({ detailError: error });
    res.status(500).json("Server Error.");
  }
};

export const delteSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    const del = await Song.findByIdAndDelete(id);
    if (!del) {
      return res.status(400).json("No song found");
    }
    if (del.albumId) {
      try {
        await Album.findOneAndUpdate({ songs: id }, { $pull: { songs: id } });
      } catch (error) {
        next(error);
      }
    }
    return res.status(200).json("Deleted Successfully");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const album = async (req, res, next) => {
  try {
    if (!req.files || !req.files.imageFile) {
      return res.status(400).json("No image file provided.");
    }

    const { title, releaseYear,artist } = req.body;
    const image = req.files.imageFile;
    const imageUrl = await dataSetter(image.tempFilePath);

    const newAlbum = await Album.create({
      title,
      releaseYear,
      artist,
      imageUrl,

    });

    return res.status(200).json(newAlbum);
  } catch (error) {
    next(error);
  }
};

export const delAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndDelete(id);
    if (!album) {
      return res.status(400).json("No Album Exists");
    }
    await Song.deleteMany({ albumId: id });
    return res.status(200).json("Album Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

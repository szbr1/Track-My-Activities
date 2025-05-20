import { json } from "express";
import cloudinary from "../lib/cloudinary";
import Album from "../models/album.model";
import Song from "../models/song.model";

export const song = async (req, res, next) => {
  async function dataSetter(file) {
    try {
      const data = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
      });
      return data.secure_url;
    } catch (error) {
      console.error({ detailError: error });
      return res.status(400).json({ message: "Cloudinary server failed" });
    }
  }

  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json("Please upload all files");
    }
    const { artist, title, albumId } = req.body;

    const imageFile = req.files.imageFile;
    const audioFile = req.files.audioFile;

    const imageUrl = await dataSetter(imageFile);
    const audioUrl = await dataSetter(audioFile);

    const newStore = await Song.create({
      artist,
      title,
      imageUrl,
      audioUrl,
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
    if(!del) {
      return res.status(400).json("No song found");
    }
    if(del.albumId) {
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

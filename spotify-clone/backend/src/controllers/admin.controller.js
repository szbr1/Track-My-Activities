import Song from "../models/song.model.js";
import Album from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

// Improved cloudinary upload function
async function uploadToCloudinary(file) {
  try {
    // Use file.data buffer directly instead of temp file
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { 
          resource_type: file.mimetype.startsWith('audio/') ? 'auto' : 'image',
          public_id: `${Date.now()}-${file.name.replace(/\.[^/.]+$/, '')}`
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      
      // Write the buffer directly to Cloudinary
      uploadStream.end(file.data);
    });
    
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
}

export const song = async (req, res, next) => {
  try {
    // Check if files exist
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ error: 'Both audio and image files are required' });
    }

    const { artist, title, albumId, duration } = req.body;

    // Validate required fields
    if (!artist || !title || !duration) {
      return res.status(400).json({ error: 'Artist, title, and duration are required' });
    }

    // Upload files to Cloudinary
    const [imageUrl, audioUrl] = await Promise.all([
      uploadToCloudinary(req.files.imageFile),
      uploadToCloudinary(req.files.audioFile)
    ]);

    // Create the song
    const newSong = await Song.create({
      artist,
      title,
      imageUrl,
      audioUrl,
      duration,
      albumId: albumId || null,
    });

    // If albumId was provided, update the album
    if (albumId) {
      try {
        await Album.findByIdAndUpdate(albumId, {
          $push: { songs: newSong._id },
        });
      } catch (error) {
        console.error('Album update error:', error);
        // Don't fail the whole operation if album update fails
      }
    }

    return res.status(201).json(newSong);
  } catch (error) {
    console.error('Song creation error:', error);
    res.status(500).json({ error: error.message || 'Failed to create song' });
  }
};

// ... rest of your controller code remains the same ...

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

    const { title, releaseYear } = req.body;
    const image = req.files.imageFile;
    const imageUrl = await dataSetter(image);

    const newAlbum = await Album.create({
      title,
      releaseYear,
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

import Album from "../models/album.model.js";
import Song from "../models/song.model.js";
import User from "../models/user.model.js";

export const AllStatuses = async (req, res, next) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalAlbum = await Album.countDocuments();
    const totalUsers = await User.countDocuments();

    const totalArtists = await Song.aggregate([
      {
        $unionWith: {
          coll: "albums",
          pipeline: [],
        },
      },
      {
        $group: {
          _id: "$artist",
        },
      },
      { $count: "count" },
    ]);
    return res
      .status(200)
      .json({ totalAlbum, totalArtists, totalSongs, totalUsers });
  } catch (error) {
    next(error);
  }
};

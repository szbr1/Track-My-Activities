import User from "../models/user.model.js";

export const allUsers = async (req, res, next) => {
  try {
      const { userId: loggedInUserId } = req.auth()
      const data = await User.find({ clerkId: { $ne: loggedInUserId } });
      res.status(200).json(data);
  } catch (error) {
      console.error('error', error);
      next(error);
  }
};
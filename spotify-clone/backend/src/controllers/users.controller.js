import User from "../models/user.model.js";

export const allUsers = async (req, res, next) => {
  console.log("req.auth", req.auth, "req.auth.userId", req.auth.userId); // ✅ Correct
  try {
      const { userId: loggedInUserId } = req.auth()
      const data = await User.find({ clerkId: { $ne: loggedInUserId } });
      res.status(200).json(data);
  } catch (error) {
      console.error('error', error);
      next(error);
  }
};
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json("no token found");
  }
  jwt.verify(token, process.env.TOKEN, (err, decode) => {
    if (err) {
      console.error(err);
      return res.status(400).json("Invalid token");
    }
    req.userId = decode.userId;
    next();
  });
};

export default authMiddleware;

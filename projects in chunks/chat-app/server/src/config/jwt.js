import jwt from "jsonwebtoken";

export const TokenCheck = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.TOKEN, { expiresIn: "7d" });

    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: true,
      httpOnly: false,
    });
    return res.status(200).json(token);
  } catch (error) {
    console.error(error);
  }
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decode = jwt.verify(token, process.env.TOKEN);
    if (!decode) return;
    decode.userId = req.userId;
    next();
  } catch (error) {
    console.error(error);
  }
};

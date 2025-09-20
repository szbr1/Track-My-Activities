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
  } catch (error) {
    console.error(error);
  }
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      // If no token is present in cookies, send an error response
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN);
     if (!decoded) {
      // If decoding fails, send a response indicating the token is invalid
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId
    next();
  } catch (error) {
    console.error(error);
  }
};


export const roomToken = (res, roomId) => {
  try {

   

     const roomToken =  jwt.sign({roomId} , process.env.ROOM, {expiresIn: "7d"})
     console.log(roomToken, "token")
     res.cookie("roomToken",roomToken, {maxAge: 7*24*60*60*1000, httpOnly:false, secure: true})
  } catch (error) {
    console.error()
  }
}


export const RoomMiddleware = (req,res,next)=>{

  try {
    const RoomToken = req.cookies.roomToken;

    
    if(!RoomToken) {
      return res.json("Invalid Token")
    }
    const decoded =  jwt.verify(RoomToken,process.env.ROOM)
    req.roomId = decoded.roomId
    next()
  } catch (error) {
    console.error(error)
    return res.status(501).json("user not verified")
  }

}
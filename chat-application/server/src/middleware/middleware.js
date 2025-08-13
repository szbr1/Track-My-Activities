import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {

  const token = req.cookies.token;


  if (!token) {
    return res.status(400).json("no token found");
  }
    
 const decode =  jwt.verify(token , process.env.TOKEN)

 if(!decode){
  return res.status(401).json("Aunorhorized")
 }
 
 
 req.userId = decode.userId
 next()
};

export default authMiddleware;

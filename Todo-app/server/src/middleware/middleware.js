import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // get token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json('No token found in cookies');
  }

  // verify token
  jwt.verify(token, process.env.TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json('Invalid or expired token');
    }

    // save userId for next middleware/routes
    req.userId = decoded.userId;
    next();
  });
};

export default authMiddleware;

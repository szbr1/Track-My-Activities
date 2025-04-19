import jwt from 'jsonwebtoken';
import User from '../Schemas/authUserSchema.js';

/**
 * Middleware to protect routes by verifying JWT token.
 * It adds the authenticated user's data to the request object.
 */
const authMiddleware = async (req, res, next) => {
  let token;

  try {
    // Check if the Authorization header is present and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      // Extract the token from the header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      // Find the user from the database using decoded ID and exclude the password
      req.user = await User.findById(decoded.id).select("-password");

      // Move to the next middleware or route handler
      next();
    } else {
      // If no token is provided in the header
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

  } catch (error) {
    // If token verification fails
    console.error("Token verification failed:", error);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authMiddleware;

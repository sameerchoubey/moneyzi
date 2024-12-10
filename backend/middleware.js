const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

/**
    * Middleware to authenticate requests using JWT
    * @param {Object} req - Express request object
    * @param {Object} res - Express response object
    * @param {Function} next - Express next middleware function
*/

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}
const jwt = require('jsonwebtoken');


const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing token." });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token." });
    }
}

module.exports = protect;
const jwt = require('jsonwebtoken');


const generateToken = (student) => {
    // node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
    return jwt.sign(
        {
            "userid": student._id,
            "email": student.email,
            "name": student.name
        }, // payload,
        process.env.JWT_SECRET, // secret
        {
            expiresIn: "7d"
        } // expire
    );
};

module.exports = generateToken;
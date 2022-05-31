// Load env varriables from .env file
require('dotenv').config();

// Import Json Web Token
const jwt = require('jsonwebtoken');

// Generate Token Function
const generateAccessToken = (user) => {
	return jwt.sign(
		{
			id: user[0].id,
			firstname: user[0].firstname,
            lastname: user[0].lastname,
            email: user[0].email,
            password: user[0].password,
			role: user[0].role,
			// isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET,
		{ expiresIn: "60m" }
	);
};

// Refresh token
const generateRefreshToken = (user) => {
	return jwt.sign(
		{
			id: user[0].id,
			firstname: user[0].firstname,
            lastname: user[0].lastname,
            email: user[0].email,
            password: user[0].password,
			role: user[0].role,
			//isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET_R,
	);
};

module.exports = { generateAccessToken, generateRefreshToken };
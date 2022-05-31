// Load env varriables from .env file
require('dotenv').config();

// Import Json Web Token
const jwt = require('jsonwebtoken');

// Generate Token Function
const generateAccessToken = (user) => {
	return jwt.sign(
		{
			id: user.id,
			role: user.role,
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
			id: user.id,
			role: user.role,
			//isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET_R,
	);
};

module.exports = { generateAccessToken, generateRefreshToken };
// Load env varriables from .env file
require('dotenv').config();

// Import Json Web Token
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		// Verify if token is valid
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) {
				return res.status(403).json("Token is not valid!");
			} else {
				req.user = user;
				console.log(req.user);
				next();
			}
		});
	} else {
		res.status(401).json("You are not authenticated!");
	}
};

// const verifyTokenAndAuthorization = (req, res, next) => {
// 	verifyToken(req, res, () => {
// 		// Compare session token from req.user with param id
// 		// if (req.user.id === req.params.id || req.user.isAdmin)
// 		if (req.user.role === "true") {
// 			next();
// 		} else {
// 			res.status(401).json("You are not authorized!");
// 		}
// 	});
// };

module.exports = { verifyToken };
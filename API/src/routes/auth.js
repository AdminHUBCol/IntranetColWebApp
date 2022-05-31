const router = require('express').Router();

// Load env varriables from .env file
require('dotenv').config();

// Import Json Web Token
const jwt = require('jsonwebtoken');
// Import encrypt module
const CryptoJS = require('crypto-js');

// Generate token service
const { generateAccessToken, generateRefreshToken } = require('../modules/tokenGenerator');
// Verify access service
const { verifyToken } = require('../modules/verifyAuthorization');

// Connection -------
const mysql = require('mysql');
//Mysql Connection // Test in local
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

//GET USERS
router.get('/', async (req, res) => {

	const sql = 'SELECT * FROM user';
	await connection.query(sql, (err, data) => {
		if (err) throw error;
		if (data.length > 0) {
			res.json(data);
		} else {
			res.send('Not results');
		}
	});
});

// Storage tokens
let refreshTokens = [];

//REFRESH TOKEN ENDPOINT
router.post('/refresh', (req, res) => {
	const refreshToken = req.body.token;
	!refreshToken && res.status(401).json("You are not authenticated");
	// Check if login refresh token is into array
	if (!refreshTokens.includes(refreshToken)) {
		return res.status(403).json("Refresh token is not valid!");
	}
	jwt.verify(refreshToken, process.env.JWT_SECRET_R, (err, user) => {
		err && console.log(err);
		// Delete previous token anyway
		refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

		// Create new tokens
		const newAccessToken = generateAccessToken(user);
		const newRefreshToken = generateRefreshToken(user);

		// Add new token into array
		refreshTokens.push(newRefreshToken);

		res.status(200).json({
			accessToken: newAccessToken,
			refreshToken: newRefreshToken
		});
	});
});


//LOGIN ENDPOINT
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		// Check user
		if (!user)
			return res.status(404).json("Login failed");
		// Check if user is active
		if (!user.status)
			return res.status(403).json("Login failed");
		// Check password
		const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
		OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
		if (OriginalPassword !== req.body.password)
			return res.status(401).json("Login failed");
		//console.log(user)
		// Create session token - JWT
		const accessToken = generateAccessToken(user);
		const refreshToken = generateRefreshToken(user);
		// Storage token into array
		refreshTokens.push(refreshToken);
		// console.log(refreshTokens);
		// Return info without password
		const { password, ...user_ } = user._doc;
		res.status(200).json({
			user_,
			accessToken,
			refreshToken,
		});
	} catch (error) {
		return res.status(500).json(error);
	}
});

//LOGOUT ENDPOINT
router.post('/logout', verifyToken, (req, res) => {
	const refreshToken = req.body.token;
	// Delete token from array to logout
	refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
	res.status(200).json("You logged out successfully!");
});

module.exports = router;

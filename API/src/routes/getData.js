const router = require('express').Router();

// Import verify service
const { verifyToken } = require('../modules/verifyAuthorization');

// Delete unused connection --->
const { connection } = require('../dbconnection')

// Participants All Data Query
const { participantsAllData } = require('../queryDB/participantsAllData');
// Participant data by ID Query
const { participantsAllDataById } = require('../queryDB/participantsAllDataById');
// ParticipantsInfo Query
const { participantsInfo } = require('../queryDB/participantsInfo');
// PaymentStatus Query
const { paymentStatus } = require('../queryDB/paymentStatus');
// StatusLog Query
const { statusLog } = require('../queryDB/statusLog');
// userReports Query
const { userReports } = require('../queryDB/userReports');
// workingStatus Query
const { workingStatus } = require('../queryDB/workingStatus');

// FILL SUPER DICTIONARY
let super_table = {}

// GET participantsHBTNAPI
router.get('/participantsAllData', async (req, res) => {
	try {
		data = await participantsAllData();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET participantsHBTNAPI by User ID
router.get('/participantsAllData/:intranetUserId', async (req, res) => {
	const { intranetUserId } = req.params
	try {
		data = await participantsAllDataById(intranetUserId);
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET participantsInfo
router.get('/participantsInfo', async (req, res) => {
	try {
		data = await participantsInfo();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET paymentStatusHBTNAPI
router.get('/paymentStatusHBTNAPI', async (req, res) => {
	try {
		data = await paymentStatus();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET statusLogHBTNAPI
router.get('/statusLogHBTNAPI', async (req, res) => {
	try {
		data = await statusLog();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET userReportsHBTNAPI
router.get('/userReportsHBTNAPI', async (req, res) => {
	try {
		data = await userReports();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});

// GET workingStatusHBTNAPI
router.get('/workingStatusHBTNAPI', async (req, res) => {
	try {
		data = await workingStatus();
		res.status(200).json(data);
	} catch (error) {
		res.status(500);
	}
});


module.exports = router;

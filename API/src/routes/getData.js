const router = require('express').Router();

// Import verify service
const { verifyToken } = require('../modules/verifyAuthorization');
const { getAllData } = require('../queryDB/getAllData');
const { storeAllData } = require('../queryDB/storeAllData')


// GET participantsHBTNAPI
router.get('/getAllData', async (req, res) => {
	try {
		data = await getAllData();
		await storeAllData(obj);
		res.status(200).json("Data uploaded successfully!");
	} catch (error) {
		res.status(500);
	}
});


module.exports = router;

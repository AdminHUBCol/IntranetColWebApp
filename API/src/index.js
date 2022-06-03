const app = require('./app');



const { connect } = require('./dbconnection');
const { storeData } = require('./storage');

async function run() {
	try {
		await connect();
		const PORT = process.env.PORT || 3050;
		await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	} catch (error) {
		console.log("Couldn't connect to server");
		console.log(error);
	}
}

run();

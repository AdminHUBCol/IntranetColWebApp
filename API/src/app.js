// Create Server
const express = require("express");
const app = express();

// Check request status code
const morgan = require("morgan");
app.use(morgan("dev"));

// Load env varriables from .env file
require('dotenv').config();

// Set allowed connections
const cors = require("cors");
app.use(cors({ origin: "*" }));

// Parse to JSON
app.use(express.json());

// Get route modules
const authRoute = require("./routes/auth");

// Blueprints of endpoints
app.use("/api/auth", authRoute);

module.exports = app;

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());



// //route-home
// app.get('/', (req, res) => {
//     // res.send('IntranetColWebApp API!');

//     const sql = 'SELECT * FROM user';

//     connection.query(sql, (err, data) => {
//         if (err) throw error;
//         if (data.length > 0) {
//             res.json(data);
//         } else {
//             res.send('Not results');
//         }
//     });

// });

// //api customers
// app.get('/participantsAllData', (req, res) => {
//     const sql = 'SELECT * FROM participantsHBTNAPI';

//     connection.query(sql, (error, results) => {
//         if (error) throw error;
//         if (results.length > 0) {
//             res.json(results);
//         } else {
//             res.send('Not results');
//         }
//     });
// });

// app.get('/participantsAllData/:intranetUserId', (req, res) => {
//     const { intranetUserId } = req.params
//     const sql = `SELECT * FROM participantsHBTNAPI WHERE intranetUserId = ${intranetUserId}`;
//     connection.query(sql, (error, results) => {
//         if (error) throw error;
//         if (results.length > 0) {
//             res.json(results);
//         } else {
//             res.send('Not result');
//         }
//     });
// });

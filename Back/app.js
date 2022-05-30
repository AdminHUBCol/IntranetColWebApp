const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyParser.json());

require("dotenv").config();


//Mysql Connection // Test in local
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
//check connection
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});


//route-home
app.get('/', (req, res) => {
    res.send('IntranetColWebApp API!');
});

//api customers
app.get('/participantsAllData', (req, res) => {
    const sql = 'SELECT * FROM participantsHBTNAPI';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not results');
        }
    });
});

app.get('/participantsAllData/:intranetUserId', (req, res) => {
    const { intranetUserId } = req.params
    const sql = `SELECT * FROM participantsHBTNAPI WHERE intranetUserId = ${intranetUserId}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});



// cargar app
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
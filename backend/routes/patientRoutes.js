// patientRoutes.js
const express = require('express');
const mysql=require('mysql')
const router = express.Router();
const bcrypt = require('bcryptjs');

const Patient = require('../models/patientModel'); 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'cms'
  });
 
router.get('/', (req, res) => {
    connection.query('SELECT * FROM patient', (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json(results);
          console.log(results)
        }
      });
    //   connection.end();
});

// Create a new patient
router.post('/', async (req, res) => {
    const newPatient = new Patient(req.body);
    const hashedPassword =  await bcrypt.hash(req.body.password,10); // Hash password with 10 salt rounds
    const createTableQuery = `CREATE TABLE IF NOT EXISTS patient (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(255),
        lastName VARCHAR(255),
        age INT,
        username VARCHAR(255),
        password VARCHAR(255)
    )`;
    const insertQuery = `INSERT INTO patient (
        firstName, 
        lastName,
        age,
        username,
        password
        ) VALUES (?,?,?,?,?)`;
    const insertValues = [
         newPatient.firstName, 
         newPatient.lastName,
         newPatient.age,
         newPatient.username,
         hashedPassword
        ];

    // Check if the database exists and create the table
    connection.query(createTableQuery, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Insert the data into the table
            connection.query(insertQuery, insertValues, (err, results) =>{
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Internal server error' });
                } else {
                    res.json(results);
                    console.log(results);
                }
            });
        }
    });
});


// Update a patient by ID
router.post('/:id', (req, res) => {
    const patientId = req.params.id;
    const updatedPatient = new Patient(req.body);

    const updateQuery = `UPDATE patient SET name = ?, age = ?, gender = ? WHERE id = ?`;
    const updateValues = [updatedPatient.name, updatedPatient.age, updatedPatient.gender, patientId];

    // Check if the database exists and create the table
    connection.query(updateQuery, updateValues, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
             console.log(results)
        }
    });
});




// Delete a patient by ID
router.delete('/:id', (req, res) => {
    const patientId = req.params.id;

    const deleteQuery = `DELETE FROM patient WHERE id = ?`;
    const deleteValues = [patientId];

    connection.query(deleteQuery, deleteValues, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
            console.log(results)
        }
    });
});

router.get('/:id', (req, res) => {
    const patientId = req.params.id;
  
    const getSingleRecord = `SELECT * FROM patient WHERE id = ?`;

    connection.query(getSingleRecord, patientId, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Patient not found' });
            } else {
                res.json(results[0]);
                console.log(results);
            }
        }
    });
});

module.exports = router;

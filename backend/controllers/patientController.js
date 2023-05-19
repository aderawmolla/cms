const mysql=require('mysql')

const addPatient= async()=>{
    const createTablePatient = `CREATE TABLE IF NOT EXISTS patient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10)
  )`;

  connection.query(createTablePatient, (err) => {
    if (err) {
      console.error('Error creating table: ', err);
      return;
    }

    console.log('Patient table created or already exists.');

    // Insert a new row of values into the patient table
    const insertQuery = `INSERT INTO patient (name, age, gender) VALUES (?, ?, ?)`;
    const patientData = ['John Doe', 30, 'Male'];

    connection.query(insertQuery, patientData, (err, results) => {
      if (err) {
        console.error('Error inserting data: ', err);
        return;
      }

      console.log('Data inserted successfully.');
      console.log('Inserted row ID:', results.insertId);

      // Close the database connection
     
    });
  });

}


module.exports=router;

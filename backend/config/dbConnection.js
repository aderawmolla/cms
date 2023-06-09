const mysql = require('mysql');
const connectDb = async () => {
  try {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database:'cms'
    });

    await new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          reject(err);
          return;
        }
        console.log('Connected to the database!');
        resolve();
      });
    });

    return connection;
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;

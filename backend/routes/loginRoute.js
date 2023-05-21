const express = require('express');
const mysql=require('mysql')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'cms'
  });
 
  router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      let query = 'SELECT * FROM patient WHERE username=?';
      const result = await new Promise((resolve, reject) => {
        connection.query(query, [username], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
  
      console.log(req.body.username);
      console.log(req.body.password);
      console.log(result)
      let user = null;
  
      if (result.length === 0) {
        query = 'SELECT * FROM admin WHERE username=?';
        const adminResult = await new Promise((resolve, reject) => {
          connection.query(query, [username], (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
  
        if (adminResult.length === 0) {
          query = 'SELECT * FROM doctor WHERE username=?';
          const doctorResult = await new Promise((resolve, reject) => {
            connection.query(query, [username], (error, results) => {
              if (error) {
                reject(error);
              } else {
                resolve(results);
              }
            });
          });
  
          if (doctorResult.length === 0) {
            return res.json({ message: 'User not found' });
          }
  
          user = doctorResult[0];
        } else {
          user = adminResult[0];
        }
      } else {
        user = result[0];
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        const userType = user.constructor.name;
        const token = jwt.sign({ userId: user.id, userType }, 'your-secret-key', { expiresIn: '1h' });
        const response = {
          message: 'Authentication successful',
          token: token,
        };
  
        res.json(response);
      } else {
        res.json({ message: 'Incorrect password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  });
  
  router.post('/logout', (req, res) => {
    // Clear the stored JWT token on the client-side (local storage)
    // Here, we assume the JWT token is stored in a 'token' key in local storage
    localStorage.removeItem('token');
  
    // Alternatively, if using cookies, you can delete the cookie containing the JWT token
  
    res.json({ message: 'Logout successful' });
  });
module.exports=router
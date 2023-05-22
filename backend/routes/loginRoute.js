const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 const {Patient,sequlize}=require('../models/patientModel')
 
  router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    try {
      let user = await Patient.findOne({ where: { username } });
  
      if (!user) {
        user = await Admin.findOne({ where: { username } });
      }
    
      if (!user) {
        user = await Doctor.findOne({ where: { username } });
      }

      if (!user) {
        return res.json({ message: 'User not found' });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
    
      if (isPasswordMatch) {
        const userType = user.constructor.name;
        const token = jwt.sign({ userId: user.id, userType },'clinic-management', { expiresIn: '1h' });
        const decodedToken = jwt.decode(token);
        console.log("..............")
        console.log(userType)
        const response = {
          message: 'Authentication successful',
          token: token,
          userType:userType,
          decodedTOken:decodedToken
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
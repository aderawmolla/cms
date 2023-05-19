
const express=require("express")
const app=express()
const cors=require('cors')
const PORT=5000
const patientRoutes=require('./routes/patientRoutes')
app.use(express.json());
require('dotenv').config();
const connectDb=require('./config/dbConnection')
app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})

app.use('/patients', patientRoutes);


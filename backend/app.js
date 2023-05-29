//sudo service apache2 stop
//sudo /opt/lampp/xampp start
const express=require("express")
const app=express()
const cors=require('cors')
const PORT=5000
const patientRoutes=require('./routes/patientRoutes')
const adminRoutes=require('./routes/adminRoutes')
const doctorRoutes=require('./routes/doctorRoutes')
const paymentRoutes=require('./routes/paymentRoutes')
const appointmentRoutes=require('./routes/appointmentRoutes')
const loginRoutes=require('./routes/loginRoute')
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})
app.use('/patients', patientRoutes);
app.use('/authenticate',loginRoutes);
app.use('/admins',adminRoutes);
app.use('/doctors',doctorRoutes)
app.use('/appointments',appointmentRoutes)
app.use('/payments',paymentRoutes)



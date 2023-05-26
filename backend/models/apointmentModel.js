const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'cms', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const Appointment= sequelize.define('Appointment', {
  id: {
    type: Sequelize.STRING(255),
    autoIncrement:false,
    primaryKey: true,
  },
  doctorId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  patientId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  appointmentFee: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  date: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  time: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});
module.exports = {Appointment,sequelize};

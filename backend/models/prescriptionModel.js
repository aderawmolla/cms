
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'cms', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Prescription = sequelize.define('Prescription', {
  id: {
    type: Sequelize.STRING(255),
    autoIncrement:false,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  doctorId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  issueDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  confirmDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING(255),
    allowNull: false,
  }
});
module.exports = {Prescription,sequelize};

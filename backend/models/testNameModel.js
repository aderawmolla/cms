
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'cms', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const TestName=sequelize.define('TestName', {
  id: {
    type: Sequelize.STRING(255),
    autoIncrement:false,
    primaryKey: true,
  },
  testName:{
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  prescId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  value: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});
module.exports = {TestName,sequelize};

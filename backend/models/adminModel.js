
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'cms', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const Admin = sequelize.define('Admin', {  
 id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
 },     
  photo: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(10),
    allowNull:false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  
});
module.exports = {Admin,sequelize};

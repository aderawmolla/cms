const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
   'cms', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
const Treatment = sequelize.define('Treatment', {
    id: {
        type: Sequelize.STRING(255),
        autoIncrement: false,
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
    disease: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    dosage: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    price: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
});
module.exports = { Treatment, sequelize };

const Sequelize = require('sequelize');
const {db} = require('../config/db');
const Categories = require('./categoriesSchema');

const Subcategories = db.define('subcategories', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cid:{
        type: Sequelize.INTEGER,
        allowNull:  false
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: false
    },
    isChecked: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    created_by: {
        type: Sequelize.STRING,
        defaultValue: false
    },
    updated_by: {
        type: Sequelize.INTEGER,
        defaultValue: false
    },
    deletedAt: {
        type: Sequelize.STRING,
        defaultValue: false

    },
    deleted_by: {
        type: Sequelize.STRING,
        defaultValue: false

    }
});


Subcategories.belongsTo(Categories, {foreignKey: 'cid'});
Subcategories.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});

module.exports = Subcategories;

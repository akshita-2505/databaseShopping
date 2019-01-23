const Sequelize = require('sequelize');
const {db} = require('../config/db');

const Categories = db.define('categories', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    image: {
    type: Sequelize.STRING
    },
    isChecked:{
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

Categories.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = Categories;
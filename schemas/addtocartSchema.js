const Sequelize = require('sequelize');
const {db} = require('../config/db');

const AddToCart = db.define('addtocarts', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cid:{
        type: Sequelize.INTEGER,
        allowNull:  false
    },
    scid:{
        type: Sequelize.INTEGER,
        allowNull:  false
    },
    name: {
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    quantity:{
        type: Sequelize.INTEGER,
        defaultValue:1
    },
    price: {
        type: Sequelize.INTEGER
    },
    detail: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    isChecked:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
});

AddToCart.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = AddToCart;
const Sequelize = require('sequelize');
const {db} = require('../config/db');
const Categories = require('./categoriesSchema');
const Subcategories = require('./subCategoriesSchema');


const Products = db.define('products', {
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
    quntity:{
        type: Sequelize.INTEGER,
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
Products.belongsTo(Categories, {foreignKey: 'cid'});
Products.belongsTo(Subcategories, {foreignKey: 'scid'});
Products.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});


module.exports = Products;

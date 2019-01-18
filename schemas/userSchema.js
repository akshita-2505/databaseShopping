const Sequelize = require('sequelize');
const {db} = require('../config/db');

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
    },
    age: {
        type: Sequelize.INTEGER
    },
    phone_number:{
        type: Sequelize.INTEGER
        // length:10
    },
    email:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING
    },
    isChecked:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    type:{
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
//password will save as a hash value

// User.pre('save', function(next){
//     this.password = bcrypt.hashSync(this.password, saltRounds);
//     next();
// });
// force: true will drop the table if it already exists
User.sync({force: false}).then((res) => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});



module.exports = User;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser');
var usersRouter = require('./routes/userRoutes');
var categoriesRouter = require('./routes/categoriesRoutes');
var subcategoriesRouter = require('./routes/subcategoriesRouter');
var productsRouter = require('./routes/productRoutes');

var app = express();
const {db} = require('./config/db');

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/productImage/')));
app.use(express.static(path.join(__dirname, 'public/subcategoryImage/')));
app.use(express.static(path.join(__dirname, 'public/categoryImage/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', usersRouter);
app.use('/categories',categoriesRouter);
app.use('/subcategories',subcategoriesRouter);
app.use('/products',productsRouter);

// app.use(function(req, res, next) {
//   next(createError(404));
// });

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.json({
//     message: err.message + '*****',
//     error: err
//   });
//   res.render('error', { error: err });
// });

app.listen(3000, (err, res) => {
    if(err){
        console.log("Error occurred "+err.toString());
    } else {
        console.log("Server is listening on port 3000")
    }
});
module.exports = app;
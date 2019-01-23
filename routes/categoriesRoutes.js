var express = require('express');
var router = express.Router();
const user=require('../controller/categoriesController');
const upload = require('../config/multer');
let UPLOAD_PATH = 'public/categoryImage';

router.get('/',user.getUser);
router.post('/', upload(UPLOAD_PATH).single('image'),user.uploadProduct);

router.get('/:categoriesId',user.getUserById);
router.put('/:categoriesId',user.userUpdateById);
router.delete('/:categoriesId',user.deleteUser);

module.exports = router;
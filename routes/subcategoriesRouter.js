var express = require('express');
var router = express.Router();
const user=require('../controller/subcategoriesController');
const upload = require('../config/multer');
let UPLOAD_PATH = 'public/subcategoryImage';

router.get('/',user.getUser);
router.post('/', upload(UPLOAD_PATH).single('image'),user.uploadProduct);

// router.get('/:usersId',user.getUserById);
router.put('/:usersId',user.userUpdateById);
router.delete('/:usersId',user.deleteUser);
router.get('/:usersId',user.getUserByCId);

module.exports = router;

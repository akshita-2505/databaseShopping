var express = require('express');
var router = express.Router();
const user=require('../controller/productController');
const upload = require('../config/multer');
let UPLOAD_PATH = 'public/productImage';

router.get('/',user.getUser);
router.post('/', upload(UPLOAD_PATH).single('image'),user.uploadProduct);

// router.get('/:productsId',user.getUserById);
router.get('/:productsId',user.getUserBySCId);
router.get('/email/:productsId',user.getUserByEmail);
router.put('/update/:productsId',user.userUpdateById);
router.delete('/:productsId',user.deleteUser);

module.exports = router;

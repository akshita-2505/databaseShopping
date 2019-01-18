var express = require('express');
var router = express.Router();
const user=require('../controller/categoriesController')

router.get('/',user.getUser);
router.post('/',user.addUser);

router.get('/:categoriesId',user.getUserById);
router.put('/:categoriesId',user.userUpdateById);
router.delete('/:categoriesId',user.deleteUser);

module.exports = router;

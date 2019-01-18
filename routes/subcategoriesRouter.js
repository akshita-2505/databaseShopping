var express = require('express');
var router = express.Router();
const user=require('../controller/subcategoriesController')

router.get('/',user.getUser);
router.post('/',user.addUser);

router.get('/:usersId',user.getUserById);
router.put('/:usersId',user.userUpdateById);
router.delete('/:usersId',user.deleteUser);

module.exports = router;

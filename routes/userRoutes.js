const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')

router.post('/user',userController.CreateUser)
router.get('/users',userController.GetAllUsers)
router.get('/users/:id',userController.GetUserById)
 
module.exports = router;
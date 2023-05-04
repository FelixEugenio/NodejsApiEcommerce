
const express = require('express');
const { CreateUserController } = require('../controllers/Users/CreateUserControllers');
const { LoginUserController } = require('../controllers/Auth/AuthUserController');
const {ListUsersController} = require('../controllers/Users/ListUsersController');
const {GetSingleUserController} = require('../controllers/Users/GetSingleUserController');
const {DeleteUserController} = require('../controllers/Users/DeleteUserController');
const {UpdateUserController} = require('../controllers/Users/UpdateUserController');
const {AuthMiddleware} = require('../middlewares/AuthMiddleware');
const {IsAdminMiddleware} = require('../middlewares/IsAdminMiddleware');
const router = express.Router();

// user Routes
router.post('/register',CreateUserController);
router.post('/login',LoginUserController);
router.get('/users',ListUsersController);
router.get('/:id',AuthMiddleware,IsAdminMiddleware,GetSingleUserController);
router.delete('/:id',DeleteUserController);
router.put('/:id',UpdateUserController);


module.exports = router;
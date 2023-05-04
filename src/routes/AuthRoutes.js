
const express = require('express');
const { CreateUserController } = require('../controllers/Users/CreateUserControllers');
const { LoginUserController,HandleRefreshTokenController } = require('../controllers/Auth/AuthUserController');
const {ListUsersController} = require('../controllers/Users/ListUsersController');
const {GetSingleUserController} = require('../controllers/Users/GetSingleUserController');
const {DeleteUserController} = require('../controllers/Users/DeleteUserController');
const {UpdateUserController} = require('../controllers/Users/UpdateUserController');
const {AuthMiddleware} = require('../middlewares/AuthMiddleware');
const {IsAdminMiddleware} = require('../middlewares/IsAdminMiddleware');
const {BlockUserController} = require('../controllers/Users/BlockUserController');
const {UnBlockUserController} = require('../controllers/Users/UnblockUserController');
const router = express.Router();

// user Routes
router.post('/register',CreateUserController);
router.post('/login',LoginUserController);
router.get('/users',ListUsersController);
router.get('/refresh',HandleRefreshTokenController);
router.get('/:id',AuthMiddleware,IsAdminMiddleware,GetSingleUserController);
router.delete('/:id',DeleteUserController);
router.put('/:id',AuthMiddleware,UpdateUserController);
router.put('/block-user/:id',AuthMiddleware,IsAdminMiddleware,BlockUserController);
router.put('/unblock-user/:id',AuthMiddleware,IsAdminMiddleware,UnBlockUserController);




module.exports = router;
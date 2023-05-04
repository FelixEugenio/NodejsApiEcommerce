// Autenticated Routes

const express = require('express');
const { CreateUserController } = require('../controllers/Users/CreateUserControllers');
const { LoginUserController } = require('../controllers/Auth/AuthUserController');
const {ListUsersController} = require('../controllers/Users/ListUsersController');
const {GetSingleUserController} = require('../controllers/Users/GetSingleUserController');
const {DeleteUserController} = require('../controllers/Users/DeleteUserController');
const router = express.Router();

// user Routes
router.post('/register',CreateUserController);
router.post('/login',LoginUserController);
router.get('/users',ListUsersController);
router.get('/:id',GetSingleUserController);
router.delete('/:id',DeleteUserController);


module.exports = router;
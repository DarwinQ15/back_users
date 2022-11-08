const { Router, application } = require('express');
const {getAllUsers, getById, getUserWithAddress, getUserWithTask, createUser, updateUsers } = require('../controllers/users.controller');

const router = Router();

//Obtener todos los usuarios --> Get

router.get('/users', getAllUsers);

router.get('/users/:id', getById);

router.get('/users/:id/address', getUserWithAddress);

router.get('/users/:id/tasks', getUserWithTask);

router.post('/users', createUser);

router.put('/users/:id', updateUsers);

module.exports = router;
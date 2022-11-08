const { Router } = require('express');
const { getAllTask, getTaskById, createTask, updateTasks } = require('../controllers/task.controller');



const routerTask = Router();

routerTask.get('/task', getAllTask);

routerTask.get('/task/:id', getTaskById);

routerTask.post('/task', createTask);

routerTask.put('/task/:id', updateTasks)


module.exports = routerTask;
const { Router } = require('express');
const { getAllTask, getTaskById, createTask, completeTask } = require('../controllers/task.controller');



const routerTask = Router();

routerTask.get('/task', getAllTask);

routerTask.get('/task/:userId', getTaskById);

routerTask.post('/task', createTask);

routerTask.patch('/task/:id', completeTask);


module.exports = routerTask;
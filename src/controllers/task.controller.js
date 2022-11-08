//importamos el servicio de task
const TaskServices = require('../services/task.services');

const getAllTask = async (req, res) => {
    try {
        const result = await TaskServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TaskServices.getTaskById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = req.body;
        console.log(newTask);
        const result = await TaskServices.createTasks(newTask);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
};

const updateTasks = async (req, res) => {
    try {
        const taskBody = req.params;
        const taskId = req.body;
        console.log(taskId);
        const result = await TaskServices.updateTasks(taskBody,taskId);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    updateTasks
}
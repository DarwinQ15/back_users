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

const getTaskById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await TaskServices.getTaskById(userId);
        res.status(200).json(result);
    } catch (error) {
        next({
            message: 'no se pudieron obtener las tareas',
            status: 400,
            errorContent: error,
        });
    }
};

const createTask = async (req, res, next) => {
    try {
        const {task, categories} = req.body
        const result = await TaskServices.create(task, categories);
        res.status(201).json({message: 'La tarea ha sido creada'});
    } catch (error) {
        next({
            message: 'algo salio mal',
            status: 400,
            errorContent: error
        })
    }
};

const completeTask = async (req, res, next) => {
    try {
        const { id }= req.params;
        const result = await TaskServices.updateStatus(id);
        res.status(200).json({message: 'tarea actualizada'})
    } catch (error) {
        next({
            message: 'la tarea no ha sido actualizada',
            status: 400,
            error: error,
        });
    }
}


module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    completeTask
}
//Controlador para obtener todos los usuarios
const UserServices = require('../services/users.services');

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const result =  await UserServices.getById(id);
        res.status(200).json(result);
        
    } catch (error) {
        console.log(error);
    }
}

const getUserWithAddress = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getUserJoinAddress(id);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const getUserWithTask = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getUserJoinTasks(id);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { 
    getAllUsers,
    getById,
    getUserWithAddress,
    getUserWithTask,
};
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

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.createUser(newUser)
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
    }
}

const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUsers = req.body;
        const result = await UserServices.updateUser(updateUsers, id)
        res.status(200).json(result)
    } catch (error) {
        throw error
    }
}

module.exports = { 
    getAllUsers,
    getById,
    getUserWithAddress,
    getUserWithTask,
    createUser, 
    updateUsers
};
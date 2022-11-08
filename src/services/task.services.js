//Importamos los modelos
const Task = require('../models/tasks.models'); 

class TaskServices {
    static async getAll(){
        try {
            const result = Task.findAll({
                attributes: ['id', 'title', 'description', 'is_complete', 'user_id']
            });
            return result
        } catch (error) {
            throw error
        }
    };

    //task por id
    static async getTaskById(id) {
        try {
            const result = await Task.findByPk(id, {
                attributes: ['id', 'title', 'description', 'is_complete', 'user_id']
            });
            return result
        } catch (error) {
            throw error
        }
    };

    //crear tareas

    //POST
    static async createTasks(newTask){
        try {
            const result = await Task.create(newTask)
            return result
        } catch (error) {
            throw error
        }
    }

    //actualizar tareas

    static async updateTasks (taskBody, taskId) {
        try {
            const result = await Task.update( taskBody, {
                where: { taskId }
            });
            console.log(result);
            return result
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = TaskServices;
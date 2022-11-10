//Importamos los modelos
const Task = require('../models/tasks.models'); 
const TaskCategories = require('../models/taskcategories.models');
const Categories = require('../models/categories.models');

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
    static async getTaskById(userId) {
        try {
            const result = await Task.findAll({
                where: {userId: userId},
                attributes: ['id', 'title', 'description', 'is_complete'],
                include: {
                    model: TaskCategories,
                    as: 'categories',
                    attributes: ['categoryId'],
                    include: {
                        model: Categories,
                        as: 'categories',
                        attributes: ['name']
                    }
                }
            });
            return result
        } catch (error) {
            throw error
        }
    };

    //crear tareas

    //POST
    static async create (task, categories){
        try {
            const taskResult = await Task.create(task)
            const { id } = taskResult;
            categories.forEach(
                async (category)=> await TaskCategories.create({categoryId: category, taskId: id})
            );
            return taskResult;
        } catch (error) {
            throw error
        }
    }

    //actualizar tareas

    static async updateStatus (id) {
        try {
            const result = await Task.update({isComplete: true}, {
                where: { id }                
            });
            return result
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = TaskServices;
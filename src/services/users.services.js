//importar los modelos 
const { where } = require('sequelize');
const Address = require('../models/addresses.models');
const Categories = require('../models/categories.models');
const TaskCategories = require('../models/taskcategories.models');
const Tasks = require('../models/tasks.models');
const Users = require('../models/users.models')

class UserServices {
    static async getAll() {
        try {
            const result = Users.findAll({attributes: ['id', 'username', 'email']}); // Equivale a un SELECT * FROM USERS;
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id);
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async getUserJoinAddress(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ['id', 'username', 'email'],
                include: {
                    model: Address,
                    as: 'home',
                    attributes: {
                        exclude: ['id', 'number', 'user_id', 'userId'],
                    }
                }
            });
            return result;
        } catch (error) {
            throw(error)
        }
    }
    static async getUserJoinTasks(id) {
        try {
          const result = await Users.findOne({
            where: { id },
            attributes: ["username"],
            include: {
              model: Tasks,
              as: "todo",
              attributes: ["title", "description", "is_complete"],
              include: {
                model: TaskCategories,
                as: "categories",
                attributes: ["category_id"],
                include: {
                  model: Categories,
                  as: "categories",
                  attributes: ["name"],
                },
              },
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async createUser(newUser) {
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }
    static async updateUser(updateUsers, id) {
        try {
            const result = await Users.update(updateUsers, {
                where: {id}
            });
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices;
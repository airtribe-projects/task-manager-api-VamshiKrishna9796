// create task from params received from service
const Task = require('../models/taskModel.js');

const createTask = async (apiParams) => {
    try {
        const newTask = await Task.create(apiParams);
        return newTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating task');
    }
};

const updateTask = async (apiParams) => {
    try {
        console.log('Updating task with params:', apiParams);
        const updatedTask = await Task.findByIdAndUpdate(apiParams.id, apiParams, { new: true });
        console.log('Updated task:', updatedTask);
        return updatedTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error updating task');
    }
};

// Delete a task by id
const deleteTask = async (id) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting task');
    }
};

const findTaskById = async (id) => {
    try {
        const task = await Task.findById(id);
        return task;
    } catch (error) {
        console.error(error);
        throw new Error('Error finding task');
    }
};

module.exports = { createTask, updateTask, deleteTask, findTaskById };

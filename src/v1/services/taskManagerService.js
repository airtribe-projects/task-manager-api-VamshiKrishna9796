const {createTask, updateTask,deleteTask,findTaskById} = require('../../modelHelpers/taskModelHelper');

const createNewTask = async (apiParams) => {
    try {
        const existing = await findTaskById(apiParams._id || apiParams.id);
        if (existing) {
            return { status: 409, message: 'Task already exists' };
        }

        const newTask = await createTask(apiParams);
        return newTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating task');
    }
};

const updateExistingTask = async (apiParams) => {
    try {
        console.log('Service updating task with params:', apiParams);
        const updatedTask = await updateTask(apiParams, { new: true });
        return updatedTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error updating task');
    }
};

const voidTask = async (id) => {
    try {
        const deletedTask = await deleteTask(id);
        return deletedTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting task');
    }
};

const getTaskById = async (id) => {
    try {
        const task = await findTaskById(id);
        return task;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching task');
    }
};

module.exports = {
    createNewTask,
    updateExistingTask,
    voidTask,
    getTaskById
};
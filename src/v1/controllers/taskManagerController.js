const { createNewTask, updateExistingTask, voidTask, getTaskById } = require("../services/taskManagerService");
const mongoose = require('mongoose');

// Create task
exports.createTask = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is required' });
        }
        const apiParams = req.body;
        const createdTask = await createNewTask(apiParams);
        return res.status(201).json(createdTask);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid task ID' });
        }
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is required' });
        }
        const apiParams = req.body;
        apiParams.id = id;
        const updatedTask = await updateExistingTask(apiParams);
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        return res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid task ID'
            });
        }

        const deletedTask = await voidTask(id);

        if (!deletedTask) {
            return res.status(404).json({
                error: 'Task not found'
            });
        }

        return res.status(200).json(deletedTask);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// Fetch task by ID
exports.fetchTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'Invalid task ID'
            });
        }

        const task = await getTaskById(id);

        if (!task) {
            return res.status(404).json({
                error: 'Task not found'
            });
        }

        return res.status(200).json(task);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

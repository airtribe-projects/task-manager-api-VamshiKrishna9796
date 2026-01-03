const express = require('express');
const taskManager = require('./controllers/taskManagerController')
const { validateTask } = require('../middlewares/taskValidator');
const router = express.Router();
router.post('/tasks', validateTask, taskManager.createTask);
router.put('/tasks/:id', taskManager.updateTask);
router.delete('/tasks/:id', taskManager.deleteTask);
router.get('/tasks/:id', taskManager.fetchTask);
module.exports = router;

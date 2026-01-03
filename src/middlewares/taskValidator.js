const validateTask = (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is required' });
    }
    const { title, description, dueDate, status } = req.body;
    const missingFields = [];
    if (!title) missingFields.push('title');
    if (!description) missingFields.push('description');
    if (!dueDate) missingFields.push('dueDate');
    if (!status) missingFields.push('status');
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    next();
};
module.exports = {
    validateTask
};
//authenction middlware
const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.X_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

module.exports = {
    authenticate
};
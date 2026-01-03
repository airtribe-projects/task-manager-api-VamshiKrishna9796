const express = require("express");
const routes = require('./routes');
const { authenticate } = require("./middlewares/AuthenticationValidator");
const app = express();
app.use(express.json());
app.use('/api', authenticate, routes);
console.log('app loaded');

module.exports = app;

const express = require('express')
const routes = express.Router();
const post = require('../models/post')
const bodyParser = require('body-parser')

routes.use(bodyParser.json())

routes.get('/', (req, res) => {
    res.send('post');
})
routes.get('/specific', (req, res) => {
    res.send('specific post' + req.body);
})
module.exports = routes

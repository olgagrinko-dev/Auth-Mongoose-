const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const route = express.Router();
const { buildResponse } = require('../helper/buildResponse');
const { generateToken } = require('../helper/jwt');


route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        const token = generateToken(data[data.length - 1]);
        res.cookie('Bearer', token);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body);
        const token = generateToken(data[0]);
        res.cookie('Bearer', token);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

module.exports = route;
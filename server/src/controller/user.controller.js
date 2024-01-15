const express = require('express');
const { getAllUser, getUserById, createUser, authUser, upUser, deleteUserById } = require('../service/user.service');
const route = express.Router();
const { buildResponse } = require('../helper/buildResponse');
const { generateToken } = require('../helper/jwt');

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getUserById(req.params._id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body);
        const token = generateToken(data[data.length - 1]);

        res.cookie('Bearer', token, {
            httpOnly: false,
            secure: true
        });
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body);
        const token = generateToken(data[0]);
        res.cookie('Bearer', token, {
            httpOnly: false,
            secure: true
        });
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const data = await upUser(req.params._id, req.body);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 400, error.message);
    }
})

module.exports = route;
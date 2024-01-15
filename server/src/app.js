const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const route = require('./controller/user.controller');
const cors = require('cors');

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', route);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;

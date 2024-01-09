function buildResponse(res, message, number) {
    res.status(message).send(number);
}

module.exports = { buildResponse };
const { TableUser, ObjectId } = require('../db');

async function getAllUserDB() {
    const data = await TableUser.find();
    return data;
}

async function getUserByIdDB(_id) {
    const data = await TableUser.find({ _id: new ObjectId(_id) });
    return data;
}

async function createUserDB(user) {
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}

async function getUserByEmailDB(user) {
    const data = await TableUser.find({ email: user.email });
    return data;
}

async function upUserDB(_id, user) {
    await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });
    const data = await TableUser.find();
    return data;
}

module.exports = { getAllUserDB, getUserByIdDB, createUserDB, getUserByEmailDB, upUserDB };
const { getAllUserDB, getUserByIdDB, createUserDB, getUserByEmailDB, upUserDB, deleteUserByIdDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt');

const salt = 2;

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
}

async function getUserById(_id) {
    const data = await getUserByIdDB(_id);
    return data;
}

async function createUser(user) {
    const foundUser = await getUserByEmailDB({ email: user.email });
    if (foundUser.length) throw new Error('his user already exists');
    const hashPassword = await bcrypt.hash(user.password, salt);

    const data = await createUserDB({ ...user, password: hashPassword });
    if (!data.length) throw new Error('user is not created');
    return data;
}

async function authUser(user) {
    const foundUser = await getUserByEmailDB(user);
    if (!foundUser.length) throw new Error('this email is invalid');
    if (!(await bcrypt.compare(user.password, foundUser[0].password))) throw new Error('password')
    return foundUser
}

async function upUser(_id, user) {
    const data = await upUserDB(_id, user);
    return data;
}

async function deleteUserById(_id) {
    const data = await deleteUserByIdDB(_id);
    return data;
}

module.exports = { getAllUser, getUserById, createUser, authUser, upUser, deleteUserById };
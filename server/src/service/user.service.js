const { createUserDB, getUserByEmailDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt');

const salt = 2;

async function createUser(user) {
    const foundUser = await getUserByEmailDB({ email: user.email });
    if (foundUser.length) throw new Error('his user already exists');
    const hashPassword = await bcrypt.hash(user.password, salt);

    const data = await createUserDB({ ...user, password: hashPassword });
    if(!data.length) throw new Error('user is not created');
    return data;
}

async function authUser(user) {
    const foundUser = await getUserByEmailDB(user);
    if(!foundUser.length) throw new Error('this email is invalid');
    if(!(await bcrypt.compare(user.password, foundUser[0].password ))) throw new Error('password')
    return foundUser
}

module.exports = { createUser, authUser};
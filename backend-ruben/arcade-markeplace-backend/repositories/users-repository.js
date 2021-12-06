'use strict';

const getPool = require('../insfrastructure/database');


async function createUser(user) {

    const pool = await getPool();
    const sql = `INSERT INTO users(name, email, password, verificationCode, role, createdAT) 
    VALUES (?, ?, ?, ?, ?, ?)`;
    const { name, email, password, verificationCode, role, createAT } = user;
    const now = new Date();
    const [created] = await pool.query(sql, [
        name, email, password, verificationCode, 'reader', now
    ]);
    return created.insertId;

}

module.exports = {
    createUser,
};
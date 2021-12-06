'use strict';

const sql = require('mysql2');

const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USER,
} = process.env;

let pool;

async function getPool() {

    if(!poll){
        pool = await mysql.createPool({
            host:DATABASE_HOST,
            port:DATABASE_PORT,
            database:DATABASE_NAME,
            user:DATABASE_USER,
            password:DATABASE_USER,
        });
    }
    return pool;
};

module.exports = getPool;
'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const{ PORT } = process.env;

app.use('/api/v1/users/', userRouter);

app.listen(PORT, () => {
    console.log(`Running http://localhost:${PORT}`);
});
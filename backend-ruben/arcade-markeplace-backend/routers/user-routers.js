'use strict';

const express = require('express');
const router = express.Router();

router.route('/').post(registerUser);


module.exports = router;
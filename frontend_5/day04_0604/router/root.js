// root  route
const { getIndex } = require('../control/root');
const express = require('express');
const router =  express.Router();

router.get('/', getIndex )

module.exports = router; 
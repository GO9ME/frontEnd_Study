const express = require('express');
const router =  express.Router();
const { getUsers, getUserId } = require('../control/users');

// localhost:3000/users
router.get('/', getUsers);
router.get('/:id', getUserId);

module.exports = router;
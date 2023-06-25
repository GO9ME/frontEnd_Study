const express = require('express');
const router = express.Router();
const path = require('path');
const { 
  getRegister, 
  postRegister, 
  delRegister, 
  putRegister } = require('../control/register')

// app => router 로 수정
router.get('/', getRegister );
router.post('/', postRegister );
router.delete('/:id', delRegister)
router.put('/', putRegister)

module.exports = router; 
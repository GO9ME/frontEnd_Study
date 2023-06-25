const express = require('express');
const router = express.Router(); 

const { 
  getEmployees, 
  getEmployee, 
  postEmployee, 
  delEmployee,
  putEmployee } = require('../control/employees')

// app => router 로 수정
router.get('/', getEmployees );
router.get('/:emp_no', getEmployee );
router.post('/', postEmployee );
router.delete('/:emp_no', delEmployee)
router.put('/', putEmployee)

module.exports = router; 
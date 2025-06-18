const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student.controller')

const protect = require('../middlwares/middleware')


router.post('/signup', studentController.signup);
router.post('/login', studentController.login);
router.get('/getAllStudents', protect, studentController.getAllStudents);

module.exports = router;
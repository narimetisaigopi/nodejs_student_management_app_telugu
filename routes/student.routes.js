const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student.controller')

router.post('/signup',studentController.signup);
router.post('/login',studentController.login);

module.exports = router;
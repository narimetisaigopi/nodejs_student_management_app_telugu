const studentService = require('../services/student.service')

const signup = async (req, res) => {
    try {
      const student =  await studentService.signUp(req.body);
      res.status(201).json({ message: "Signed successfully", id: student._id });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

module.exports = { signup }
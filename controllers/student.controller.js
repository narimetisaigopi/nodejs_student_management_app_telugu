const studentService = require('../services/student.service');
const { signUpSchema } = require('../validations/studentValidations');

const generateToken = require('../utils/jwt');


const signup = async (req, res) => {
  try {
    const { error, value } = signUpSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const student = await studentService.signUp(req.body);
    res.status(201).json({ message: "Signed successfully", id: student._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const login = async (req, res) => {
  try {
    
    // TODO: login validtion JOI package
    const student = await studentService.login(req.body);
    const token = generateToken(student);
    res.status(200).json({ message: "Login successfully", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const getAllStudents = async (req, res) => {
  try {
    console.log(`Login user: ${JSON.stringify(req.user)}`);
    const studentsList = await studentService.getAllStudents();
    res.status(200).json(studentsList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


module.exports = { signup, login, getAllStudents }
const studentService = require('../services/student.service');
const {signUpSchema} = require('../validations/studentValidations');

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
    await studentService.login(req.body);
    res.status(200).json({ message: "Login successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


module.exports = { signup, login }
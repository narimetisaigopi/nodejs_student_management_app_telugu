
const Student = require('../models/student.model')
const bcrypt = require('bcryptjs');

const signUp = async ({ name, email, password, phoneNumber, age, gender, username }) => {
    const existing = await Student.findOne({ email });
    if (existing) throw new Error("Email already existed");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
        name,
        email,
        username,
        password: hashedPassword,
        phoneNumber,
        age,
        gender
    });
    return await newStudent.save();
}

// loginWithEmailAndPassword = email + password auth
const login = async ({ email, password }) => {
    const student = await Student.findOne({ email });
    if (!student) throw new Error("Invalid email or password");
    // if email already registered
    const isPasswordMatched = await bcrypt.compare(password, student.password);
    if (!isPasswordMatched) throw new Error("Invalid password");
    return student;
}

const getAllStudents = async () => {
    // return await Student.find({age : 29, isPhoneNumberVerified: true});
    return await Student.find();
}

module.exports = { signUp, login, getAllStudents }
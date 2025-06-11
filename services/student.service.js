
const Student  = require('../models/student.model')
const bcrypt = require('bcryptjs');

const signUp = async ({name, email, password, phoneNumber, age}) => {
    const existing = await Student.findOne({ email });  
    if(existing) throw new Error("Email already existed");
    const hashedPassword = await bcrypt.hash(password,10);
    const newStudent = new Student({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        age
    });
    return await newStudent.save();
}

module.exports = { signUp }
const { required } = require('joi');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, default: "NA", minlength: 3, trim: true },
    username: { type: String, required: false, lowercase: true },
    email: {
        type: String, required: [true, "Email required"], unique: true, validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password: { type: String, required: true, minlength: 8 }, // hased password
    age: Number,
    isEmailVerified: { type: Boolean, default: false },
    phoneNumber: { type: String, required: true, maxlength: 10, match: [/^\d{10}$/, "Phone number must be 10 digits"], unique: true },
    isPhoneNumberVerified: { type: Boolean, default: false },
    gender: { type:String, enum: [ 'male', 'female', 'other'] ,required: false}
});
module.exports = mongoose.model("Student",studentSchema);
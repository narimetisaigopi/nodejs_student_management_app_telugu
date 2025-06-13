const Joi = require('joi');

const signUpSchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    username: Joi.string().alphanum().min(6).max(50).optional(), //A-Za-a0-9
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
    age: Joi.number().integer().min(18).max(100).required(),
    isEmailVerified: Joi.boolean().default(false),
    isPhoneNumberVerified: Joi.boolean().default(false),
    phoneNumber: Joi.string().pattern(/^\d{10}$/).required().messages({
        'string.pattern.base': "Phone number must be 10 digits"
    })
});

module.exports = { signUpSchema };
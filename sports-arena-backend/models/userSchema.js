const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(this.password, salt)
        this.password = hashedpassword
        this.confirmpassword = hashedpassword
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
});

const UserSchema = mongoose.model("user", userSchema);
module.exports = UserSchema;
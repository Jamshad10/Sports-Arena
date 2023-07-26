const AdminSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");


const userSignup = async (req,res) => {
    try {
        console.log(req.body);
        const user = new AdminSchema({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        });
        user.save().then(result => {
            console.log(result);
            res.send("User Stored")

        })
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    userSignup,
}
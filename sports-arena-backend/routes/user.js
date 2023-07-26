const express = require('express');
const router = express.Router();


const {
    userSignup,

} = require("../controller/user");

//user routing....
router.post("/signup", userSignup);



module.exports = router;
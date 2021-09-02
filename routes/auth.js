var express = require('express')
var router = express.Router()


const {register, login} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

module.exports = router;

const express = require('express');
const {signUp} = require('../../controller/user/signup')


const userrouter = express.Router();

userrouter.get('/',signUp);

module.exports=userrouter;



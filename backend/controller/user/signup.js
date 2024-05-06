const asyncHandler=require('express-async-handler');
const User = require('../../models/user');

exports.signUp = asyncHandler(async(req,res)=>{
   
return res.json({message:"signup page of waytobooking."});

});

//module.exports=signUp;









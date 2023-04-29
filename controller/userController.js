const asyncHandler = require('express-async-handler');

//@des  register a user
//router post /api/users/register
// Access Public

const registerUser =asyncHandler( async(req,res)=>{
    res.status(400).json({message:"Register the user"})
})

const loginUser =asyncHandler( async(req,res)=>{
    res.status(400).json({message:"Login the user"})
});

const currentUser =asyncHandler( async(req,res)=>{
    res.status(400).json({message:"current user"})
});


module.exports = {registerUser,loginUser,currentUser};
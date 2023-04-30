const express = require('express');
const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req,res,next)=>{
    let token;
    let authToken = req.headers.Authorization || req.headers.authorization;
    if(authToken && authToken.startsWith("Bearer")){
        token = authToken.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("user is not authorized")

            }
            console.log(decoded)
            req.user = decoded.user;
            next();

            if(!token){
                res.status(401)
                throw new Error ("user in not authorized or token is missing");
            }
        });
    }   
})

module.exports = validateToken;
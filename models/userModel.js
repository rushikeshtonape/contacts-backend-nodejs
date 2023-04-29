const mongoose = require('mongoose');


const user = mongoose.Schema({

    username: {
        type:String,
        required:[true,"please add username"]
    },
    email: {
        type:String,
        required:[true,"please add email"],
        unique:[true , "email address already taken"]
    },
    password:{
        type:String,
        required:[true,"please add password"]
    }

},{
    timestamps:true
})
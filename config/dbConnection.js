const mongoose = require('mongoose');

const connectDb = async()=>{

    try{
        const connet = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("Database connected: " + connet.connection.host, connet.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
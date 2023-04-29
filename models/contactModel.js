const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    name :{
      type :String,
      required : (true,'please add contact name')
    },
    email : {
        type: String,
        required: (true,'please add contact emial')
    },
    phone:{
        type:String,
        required:(true,'please add contact phone number')
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Contact',contactSchema);
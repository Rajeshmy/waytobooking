
const mongoose = require('mongoose');


const schema = {
    
    NAME: {
        type: String,
        required: true
    },
    PHONE: {
        type: String
    },
    EMAIL: {
        type: String,
        required: [true,"Email is required"]
    },
    PASSWORD: {
        type: String,
        required: [true,"Password is required"]
    },
    USER_ROLE: {
        type: String,
        enum: ['ADMIN', 'SUBADMIN', 'CUSTOMER']
    },
    STATUS: {
        type: String
    },
    DEVICE_ID_IP: {
        type: String
    },
    TOKEN: {
        type: String
    },
    CREATED_AT: {
        type: Date,
        default: Date.now
    },
    UPDATED_AT: {
        type: Date,
        default: Date.now
    }
}


const signupSchema = new mongoose.Schema(schema);

exports.User = mongoose.model('User', signupSchema);


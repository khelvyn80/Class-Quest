const mongoose = require('mongoose');

const userScehma = mongoose.Schema({
    username: {type: String},
    email : {type: String},
    password: {type: String},
    createdAt: {
        type : Date,
        default : Date.now
    }
})

const UserAccount = mongoose.model('UserAccount',userScehma);
module.exports = UserAccount;
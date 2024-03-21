const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    classname: {type: String},
    capacity: {type:String},
    location: {type:String},
    status: {type:String},
    decription: {type:String},
    createdAt : {
        type: Date,
        default: Date.now
    }
});

const ClassBook = mongoose.model('ClassBook',classSchema);
module.exports = ClassBook;
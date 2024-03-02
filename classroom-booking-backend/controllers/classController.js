const ClassBook = require('../models/classModel');
//const path = require('path');


const createClass = async(req, res) => {
    const {classBody} = req.body;

    try {
        const resultClass = await ClassBook.create({classBody});
        res.status(200).json(resultClass);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {createClass};


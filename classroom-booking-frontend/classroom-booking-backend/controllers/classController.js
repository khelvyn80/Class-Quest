const ClassBook = require('../models/classModel');
//const path = require('path');


const createClass = async(req, res) => {
    const classBody = req.body;

    console.log(classBody)
    try {
        const resultClass = await ClassBook.create(classBody);
        res.status(200).json(resultClass);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllClass = async(req, res) => {
    const resultClass = await ClassBook.find({});
    res.status(200).json(resultClass);
}


const deleteClass = async(req, res) => {
    const classID = req.params.classID;


    console.log(classID);

    try {
        const resultClass = await ClassBook.findOneAndDelete({_id: classID});
        if(!resultClass){
            res.status(404).json({error: "No class found"})
        }
        res.status(200).json(resultClass);        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const updateClassStatus = async (req, res) => {
    const classID = req.params.classID;

    console.log(classID)

    try {
        const resultClass = await ClassBook.findByIdAndUpdate({_id: classID}, {...req.body}, {new: true});
        if(!resultClass){
            res.status(404).json({error: "No such class"})
        }

        res.status(200).json(resultClass)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = {createClass, getAllClass, deleteClass, updateClassStatus};


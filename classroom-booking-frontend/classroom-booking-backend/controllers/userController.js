const UserAccount = require('../models/userModel')


const createUser = async (req, res) => {
    const userBody = req.body;
    console.log(userBody)
    try {
        const userResult = await UserAccount.create(userBody);
        res.status(200).json(userResult);
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const getAllUsers = async (req, res) => {
    const userResult = await UserAccount.find({});
    res.status(200).json(userResult);
}

const deleteAUser = async (req, res) => {
    const userID = req.params.userID;

    console.log(userID);

    try {
        const userResult = await UserAccount.findOneAndDelete({_id: userID});
        if(!userResult){
            res.status(404).json({error: "No user found"});
        }

        res.status(200).json(userResult)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateAUser = async  (req, res) => {
    const userID = req.params.userID;

    console.log(userID);

    try {
        const userResult = await UserAccount.findByIdAndUpdate({_id : userID}, {...req.body}, {new: true});
        if(!userResult){
            res.status(404).json({error: "No user found"});
        }

        res.status(200).json(userResult);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createUser, getAllUsers, deleteAUser, updateAUser};
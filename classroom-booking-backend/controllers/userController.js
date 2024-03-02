import UserAccount from '../models/userModel';

const createUser = async (req, res) => {
    const {userBody} = req.body;

    try {
        const userResult = await UserAccount.create({userBody});
        res.status(200).json(userResult);
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {createUser};
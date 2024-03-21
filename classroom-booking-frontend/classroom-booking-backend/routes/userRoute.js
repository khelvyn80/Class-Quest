const express = require('express')
const {createUser, getAllUsers, deleteAUser, updateAUser} = require('../controllers/userController')
router = express.Router();

router.get('/', getAllUsers );
router.post('/', createUser);
router.delete('/delete/:userID', deleteAUser)
router.patch('/update/:userID', updateAUser)


module.exports = router;
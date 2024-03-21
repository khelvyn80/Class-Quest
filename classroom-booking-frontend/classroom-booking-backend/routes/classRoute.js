const express = require('express')

const {createClass, getAllClass, deleteClass, updateClassStatus} = require('../controllers/classController');


const router = express.Router();

router.post('/', createClass);
router.get('/', getAllClass);
router.delete('/:classID', deleteClass);
router.patch('/update/status/:classID', updateClassStatus);
module.exports = router;
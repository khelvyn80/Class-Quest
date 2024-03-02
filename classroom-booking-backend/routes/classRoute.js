const express = require('express')

const {createClass} = require('../controllers/classController');


const router = express.Router();

router.post('/', createClass);

module.exports = router;
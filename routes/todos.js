const express = require('express');
const {getAllTodos} = require('../controllers/todos');

const router = express.Router();

router.get('/', getAllTodos);

module.exports = router;
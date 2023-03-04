const express = require('express');
const router = express.Router();
const ThreadControllers = require('../controllers/ThreadControllers')

router.post('/create',ThreadControllers.createThread)

module.exports = router;
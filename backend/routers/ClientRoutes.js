const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers')

router.get('/profile/:id',UserControllers.ViewProfile)


module.exports = router;
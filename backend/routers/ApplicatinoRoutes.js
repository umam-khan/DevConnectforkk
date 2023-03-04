const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/ApplicationControllers')

router.post('/post',ApplicationController.Apply)

module.exports =  router;
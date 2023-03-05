const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/ApplicationControllers')

router.post('/post',ApplicationController.Apply);
router.get('/user/application/:id',ApplicationController.myApplications)
router.post('/delete',ApplicationController.removeApplication)

module.exports =  router;
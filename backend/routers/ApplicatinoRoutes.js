const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/ApplicationControllers')

//AUTHENTICATION MIDDLEWARE
const auth = require('../middlewares/Auth')

router.post('/post',auth,ApplicationController.Apply);
router.get('/user/application/:id',ApplicationController.myApplications)
router.post('/delete',ApplicationController.removeApplication)

module.exports =  router;
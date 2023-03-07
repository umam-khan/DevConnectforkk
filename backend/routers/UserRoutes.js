const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers')
const auth = require('../middlewares/Auth')


router.post('/signup', UserControllers.Signup);
router.post('/login', UserControllers.Login);
router.post('/update',auth,UserControllers.UpdateProfile);
router.get('/profile',auth,UserControllers.ViewProfile);
router.get('/myprofile/:id',auth,UserControllers.ViewMyProfile)
router.get('/users',auth,UserControllers.exploreUsers)




module.exports = router

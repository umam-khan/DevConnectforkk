const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers')

//MIDDLEWARE TO VALIDATE JWT BEARER TOKEN
const validateToken = (req,res,next)=>{
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !=="undefined"){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.status(403).json({erro:"Unauthorized! Please pass bearer token in authentication."})
    }
    console.log('')
}

router.post('/signup', UserControllers.Signup);
router.post('/login', UserControllers.Login);
router.post('/update', validateToken, UserControllers.UpdateProfile);
router.get('/profile',UserControllers.ViewProfile);
router.get('/myprofile/:id',UserControllers.ViewMyProfile)




module.exports = router

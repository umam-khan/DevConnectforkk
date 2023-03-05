const express = require('express');
const router = express.Router();
const ThreadControllers = require('../controllers/ThreadControllers')

//AUTHENTICATION MIDDLEWARE
const auth = require('../middlewares/Auth')

router.post('/create',auth,ThreadControllers.createThread);
router.get('/threads',ThreadControllers.viewThreads);
router.get('/thread/:id',ThreadControllers.viewThread);
router.post('/changestatus',auth,ThreadControllers.AcceptReject);
router.post('/close',auth,ThreadControllers.closeThread);
router.get('/viewMyThreads/:id',auth,ThreadControllers.viewMyThreads)
module.exports = router;
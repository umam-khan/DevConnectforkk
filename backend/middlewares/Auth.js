const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const {authorization} = req.headers;
    if(authorization){
        const token = authorization.split(' ')[1];
        const result = jwt.verify(token,'secret_key',function(err,decoded){
            if (err){
                res.status(401).json({error:"Invalid Bearer Authorization Token!"})
                return;
            }
            req.user = decoded;
        next()
        });
    } else{
        res.status(401).json({error:"No authorization token was provided | Unauthorized"})
    }
}

module.exports = auth;
const{JWT_SECRET} = require('./config')
const jwt = require('jsonwebtoken')

const authMiddleware = (req ,res , next) => {
    const auth = req.header.authorization

    if(!auth || !auth.startWith('Bearer ')){
        return res.status(411).json({
        })
    }
    const token = auth.split(' ')[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET)
            req.userId= decoded.userId;
            next();
    }catch(err){
        return res.status(403).json({})
    }
}
module.exports = {
    authMiddleware
}
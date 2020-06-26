const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = (req, res, next) =>{
    const authHeader  = req.headers.authorization;

    if(!authHeader){
        console.log('No token');
        return res.status(401).send({error: 'No token'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        console.log('token error');
        return res.status(401).send({error: 'token error'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        console.log('token error 22');
        return res.status(401).send({error: 'token error'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if (err) {
            console.log('token invalido');
            return res.status(401).send({error: 'token invalido'});  
        } 

        req.UserId = decoded.id;
        return next()
    })
}
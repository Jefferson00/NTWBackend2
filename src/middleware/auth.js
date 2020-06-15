const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = (req, res, next) =>{
    const authHeader  = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: 'No token'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send({error: 'token error'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'token error'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if (err) return res.status(401).send({error: 'token invalido'});

        req.UserId = decoded.id;
        return next()
    })
}
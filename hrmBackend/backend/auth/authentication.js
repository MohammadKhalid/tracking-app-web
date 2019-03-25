const jwt = require('jsonwebtoken');
module.exports = function(req, res, next) {
    const fulltoken = req.get('Authorization');
    if(fulltoken == null) return res.status(401).send({ 'message': 'Not Authorized','code': 403 }) 
    const token = fulltoken.split('Bearer ')
    if(!token[1]) return res.status(401).send({ 'message': 'Not Authorized','code': 403 })
    const decode = jwt.decode(token[1]);
    console.log(decode)
    if(!decode || !decode.User) return res.status(401).send({ 'message': 'Not Authorized','code': 403 })
    req.user = decode.User;
    next();
}
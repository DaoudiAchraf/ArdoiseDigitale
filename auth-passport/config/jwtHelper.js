const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('authorization' in req.headers)
    {
      
          token = req.headers['authorization'].split(' ')[1];
          console.log(token)

    }
        

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token, PUB_KEY,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req._id = decoded._id;
                    req.role = decoded.role;
                    next();
                }
            }
        )
    }
}
module.exports.cheackRole = roles => (req, res, next) => {
    if (roles.includes(req.role)) {
        next();
    } else {
        return res.status(401).json({
            message: "Unauthorize",
            success: false
        });
    }
}
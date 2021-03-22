const jwt = require('jsonwebtoken');

module.exports = function auth_verif (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        res.clt = verified;
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}
const mongoose = require('mongoose');
const router = require('express').Router();   
const agent = require ('../models/agent');
const passport = require('passport');
const utils = require('../lib/utils');

// TODO
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!"});
});

// TODO
router.post('/login', function(req, res, next){
  agent.findOne({ username: req.body.username })
    .then((user) => {
            
            if (!user) {
                res.status(401).json({ success: false, msg: "could not find user" });
            }
            
            // Function defined at bottom of app.js
            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
            
            if (isValid) {
                const tokenObject = utils.issueJWT(user);
                res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
            } else {
                res.status(401).json({ success: false, msg: "you entered the wrong password" });
            }
    
        })
        .catch((err) => {   
            next(err);
        });
});

// TODO
router.post('/register', function(req, res, next){
  const saltHash = utils.genPassword(req.body.password);
    
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new agent({
      username: req.body.username,
      hash: hash,
      salt: salt
  });
  
  newUser.save()
    .then((user) => {
      res.json({ success: true, user: user });
    })
    .catch(err => next(err));

});

module.exports = router;
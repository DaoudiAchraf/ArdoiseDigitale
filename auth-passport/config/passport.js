const fs = require('fs');
const path = require('path');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const agent = require('../models/agent');
//const client = require('mongoose').model('client');
//const merchant = require('mongoose').model('merchant');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// TODO
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};
 
passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    
    // We will assign the `sub` property on the JWT to the database ID of user
    agent.findOne({id: jwt_payload.sub}, function(err, user) {
        
        // This flow look familiar?  It is the same as when we implemented
        // the `passport-local` strategy
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
        
    });
    
}));

// TODO
module.exports = (passport) => {
    // The JWT payload is passed into the verify callback
    passport.use(new JwtStrategy(options, function(jwt_payload, done) {
        // Since we are here, the JWT is valid!
        
        // We will assign the `sub` property on the JWT to the database ID of user
        User.findOne({_id: jwt_payload.sub}, function(err, user) {
            
            // This flow look familiar?  It is the same as when we implemented
            // the `passport-local` strategy
            if (err) {
                return done(err, false);
            }
            if (user) {
                
                // Since we are here, the JWT is valid and our user is valid, so we are authorized!
                return done(null, user);
            } else {
                return done(null, false);
            }
            
        });
        
    }));
}
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.use(
  new localStrategy({ usernameField: 'mail' },
    (username, password, done) => {
      User.findOne({ mail: username },
        (err, user) => {
          if (err) return done(err);
          // unknown user
          if (!user) return done(null, false, { message: 'Email is not registered' });
          // wrong password
          if (!user.verifyPassword(password)) return done(null, false, { message: 'Wrong password.' });
          // authentication succeeded
          return done(null, user);
        });
    }),
);

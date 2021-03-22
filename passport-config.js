const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require ('bcryptjs');

const initialize = async ( passport ) => {
    const auth = (userName, password, done) => {
        const clt = getUserByUserName(userName)
        if (clt== null) {
            return done(null, false, {message: 'Not existing'})
        }

        try{
            if (await bcrypt.compare(req.body.password, clt.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
                    }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy ({ usernameField: 'userName'}),
     auth)
     passport.serializeUser((clt, done) => done(null, clt.id))
     passport.deserializeUser((clt, done) => { 
        return done(null, getUserById(id))
     })
}

module.exports = initialize;
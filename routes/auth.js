const router = require ('express').Router();
const client = require ('../models/client');
const bcrypt = require('bcryptjs');
const { clientRegisterValidation, clientLoginValidation } = require ('../validation')
const jwt = require('jsonwebtoken');
const flash = require('express-flash');
const session = require('express-session');
const generator = require('generate-password');
const { uniqueNamesGenerator, Config, names, NumberDictionary } = require ('unique-names-generator');

//REGISTER
router.post('/register', async(req, res) => {

    //client validation
    const { error } = clientRegisterValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //client exists?
    const cinExist = await client.findOne({ refCIN: req.body.refCIN });
    if ( cinExist ) return res.status(400).send('client exists');

    //generating password
    var password = generator.generate({
        length: 10,
        numbers: true
    });

    //hashing passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    //generating a username
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
    const userName = uniqueNamesGenerator ({ 
        dictionaries:[req.body.firstName, req.body.firstName, numberDictionary ],
        separator: '',
        style: 'capital' });

    //client creation
    const clt = new client ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        userName: userName,
        addressWay: req.body.addressWay,
        addressState: req.body.addressState,
        addressRegion: req.body.addressRegion,
        addressComplement: req.body.addressComplement,
        photoClient: req.body.photoClient,
        refCIN: req.body.refCIN,
        maritalstate: req.body.maritalstate,
        identityCard: req.body.identityCard,
        phoneNumber: req.body.phoneNumber,
        creationDay: req.body.creationDay,
        walletId: req.body.walletId
    });
    try {
        const savedClient = await clt.save();
        res.send(savedClient); 
    } catch (err) {
        res.status(400).send(err);
    }
});


//LOGOUT
router.post('/logout', (req, res) => {
    req.logout();
    res.send('it works');
    res.redirect('/login');
  });


//LOGIN
router.post('/login', async(req, res) => {
    //client validation
    const { error } = clientLoginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //client exists?
    const userNameExist = await client.findOne({ userName: req.body.userName });
    if ( !userNameExist ) return res.status(400).send('Client inexistant!');

    //password is valid
    const validPassword = await bcrypt.compare(req.body.password, clt.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    //jwt
    const token = jwt.sign({ _id: clt._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);


});


/*
/login
const initializePassport = require('../passport-config')
initializePassport(
  passport,
  userName => client.find(clt => clt.userName === userName),
  id => users.find(user => clt.id === id)
)
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', checkAuthenticated, (req, res) => {
    res.status(200).send('works')
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.status(200).send('works')
  })
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.status(200).send('works')
  })
  


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }*/

module.exports = router;
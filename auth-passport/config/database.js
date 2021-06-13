const mongoose = require('mongoose');

require('dotenv').config();

//connecting DB
const uri = process.env.db;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('connected db')
);
require('../models/user');
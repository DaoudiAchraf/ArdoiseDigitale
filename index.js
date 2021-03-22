const express = require('express');
const app = express();
//const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const passport = require('passport');

//Import routes
const authRoute = require('./routes/auth');

/*dotenv.config();*/

//connecting DB
mongoose.connect(
    'mongodb+srv://root:root@cluster0.aeks5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('connected db')
);

app.use(express.json());


//Route middlwares
app.use('/api/user', authRoute);

app.listen(3005, () => console.log('Running'));
const path = require('path');
const errorController = require('./controllers/error');//*
/*Paquetes: */ 
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const db = require('./util/database');//*



const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// Settings
app.set('port', process.env.PORT || 8080);

//EJS view
app.set('view engine', 'ejs');//*
app.set('views', 'views');//*
app.use(express.static(path.join(__dirname, 'public'))); /**/ 

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/', feedRoutes);/**/
app.use('/post_user', feedRoutes);/**/
app.use(errorController.get404);/**/


//app.listen(8080);
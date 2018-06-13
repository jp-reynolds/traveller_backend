require('dotenv').config();
const express      = require('express')
const bodyParser   = require('body-parser');
const morgan       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const bcrypt       = require('bcrypt');
const router       = require('./config/routes.js');
const cors         = require('cors');
const app          = express();

app.use(bodyParser.json());
app.use(router);
app.use(cors());
app.use(morgan('tiny'));
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'SuperSecretCookie',
	cookie: { maxAge: 30 * 60 * 1000 },
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});
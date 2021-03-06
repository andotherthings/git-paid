const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const auth = require('./routes/auth');
const job = require('./routes/job');
const dashboard = require('./routes/dashboard');
const form = require('./routes/form');

app.use('/auth', auth);
app.use('/api/v1/job', job);
app.use('/api/v1/dashboard', dashboard);
app.use('/api/v1/new-job', form);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = app;

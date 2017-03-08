'use strict';

const router = require('express').Router();
const knex = require('../knex.js');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const passport = require('passport');
const linkedInStrategy = require('passport-linkedin').Strategy;
const jwt = require('jsonwebtoken');

passport.use(new linkedInStrategy({
    consumerKey: process.env.LINKEDIN_CLIENT_ID,
    consumerSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.HOST + '/api/v1/auth/linkedin/callback'
  }, (token, tokenSecret, profile, done) => done(err, user)
));

router.get('/linkedin',
  passport.authenticate('linkedin'));

router.get('/linkedin/callback',
  passport.authenticate('google', { failureRedirect: '/' }), (req, res, next) => {
  console.log(req);
});

module.exports = router;

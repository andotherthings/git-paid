const router = require('express').Router();
const knex = require('../knex.js');
const { camelizeKeys, decamelizeKeys } = require('humps');

const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin').Strategy;
const jwt = require('jsonwebtoken');

passport.use(new LinkedInStrategy({
    consumerKey: process.env.LINKEDIN_CLIENT_ID,
    consumerSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.HOST + '/auth/linkedin/callback',
    profileFields: ['id', 'first-name', 'last-name', 'email-address'],
  }, (token, tokenSecret, profile, done) => {
    return done(null, { profile, token, tokenSecret });
  }
));

router.get('/linkedin',
  passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }));

router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), (req, res, next) => {
  const user = req.user.profile;
  const email = user.emails[0].value;
  const firstName = user.name.givenName;
  const lastName = user.name.familyName;
  const linkedinId = user.id;

  knex('users')
    .select(knex.raw('1=1'))
    .where('linkedin_id', linkedinId)
    .then(result => {
      let tempId = 0;

      if (!result.length) {
        const newUser = {
          email,
          linkedinId,
          firstName,
          lastName,
        };

        knex('users').insert(decamelizeKeys(newUser), '*')
          .then(user => {
            tempId = user.id;
          })
          .catch(err => {
            next(err);
          });
      }

      const userId = tempId ? tempId : result.id;

      const expiry = new Date((Date.now() + 1000) * 60 * 60 * 48);
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '2d' });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production',
      });
      res.redirect('/');
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;

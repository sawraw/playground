const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../users/user.model');

// configuring the strategy (credentials + verification callback)
passport.use(
  new GoogleStrategy({
    clientID: '519731645837-96ft20sidb0kugntmn6fmbl918suh61m.apps.googleusercontent.com',
    clientSecret: 'Pq4C-Tea2bR54jDwtVlxWvVy',
    callbackURL: '/api/auth/google/verify'
  },
  function (token, refreshToken, profile, done) {
    var info = {
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos ? profile.photos[0].value : undefined
    };
    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread(function (user) {
      done(null, user);
    })
    .catch(done);
  })
);

// Google authentication and login
router.get('/', passport.authenticate('google', { scope: 'email' }));

// handle the callback after Google has authenticated the user
router.get('/verify',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(`/users/${req.user.id}`);
  }
);

module.exports = router;

const passport = require('passport');
const { Strategy: JsonStrategy } = require('passport-json');
const { User } = require('../db/schema');

passport.use(
  new JsonStrategy(
    {
      usernameProp: 'email',
      passwordProp: 'password'
    },
    (username, password, done) => {
      User.query()
        .where('id', username)
        .first()
        .then(function(user) {
          if (!user) {
            return done('Unknown user');
          }

          user.verifyPassword(password, function(err, passwordCorrect) {
            if (err) {
              return done(err);
            }

            if (!passwordCorrect) {
              return done('Invalid password');
            }

            return done(null, user);
          });
        })
        .catch(function(err) {
          done(err);
        });
    }
  )
);

module.exports = passport;

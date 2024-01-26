const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
passport.use(
    new GoogleStrategy(
      {
        clientID:
          "142654941482-j95f7ieuvmj4jo7dqsrjutf266pd5fkg.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true,
      },
      (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile);
        //profile passed to done
      }
    )
  );
  
  // the user ID stored in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  //retrive 
  passport.deserializeUser((id, done) => {
    const user = { id: id, name: "Test User" };
    done(null, user);
  });
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { users } from "../data/users.mjs";


passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    const userEntry = [...users.entries()].find(([id, u]) => u.email === email);
    if (!userEntry) return done(null, false, { message: 'Incorrect email.' });

    const [id, userData] = userEntry;
    if (userData.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, { id, email: userData.email });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.get(id);
  if (user) {
    done(null, { id, email: user.email });
  } else {
    done(null, false);
  }
});

export { passport, users }
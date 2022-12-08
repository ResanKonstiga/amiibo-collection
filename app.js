require('@babel/register');
require('dotenv').config();

const express = require('express');
const session = require('express-session');

const FileStore = require('session-file-store')(session);

const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'auth',
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

const indexRouter = require('./routes/index.route');
const authRouter = require('./routes/auth.route');
const SearchRouter = require('./routes/search.route');
const WishlistRouter = require('./routes/wishlist.route');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/search', SearchRouter);
app.use('/wishlist', WishlistRouter);

app.listen(PORT, () => {
  console.log(`Server started PORT: ${PORT}`);
});

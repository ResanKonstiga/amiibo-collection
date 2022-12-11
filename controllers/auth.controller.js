const bcrypt = require('bcrypt');
const render = require('../lib/renderTemplate');

const SignUp = require('../views/SignUp');
const SignIn = require('../views/SignIn');

const { User } = require('../db/models');

exports.SignUpRender = async (req, res) => {
  render(SignUp, {}, res);
};

exports.SignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
      {
        name, email, password: hashedPassword,
      },
    );
    req.session.user = { id: user.id, name: user.name };
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') { render(SignUp, { error: 'Invalid email. Enter in the format example@example.com' }, res); }
    if (error.name === 'SequelizeUniqueConstraintError') { render(SignUp, { error: 'User with this email already exist' }, res); }
  }
};

exports.SignInRender = async (req, res) => {
  render(SignIn, {}, res);
};

exports.SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const isPassValid = await bcrypt.compare(password, user.password);

    if (isPassValid && user) {
      req.session.user = { id: user.id, name: user.name };
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      render(SignIn, { error: 'Invalid username or password' }, res);
    }
  } catch (error) {
    console.log(error);
    render(SignIn, { error: 'Invalid username or password' }, res);
  }
};

exports.SignOut = async (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('auth');
    res.redirect('/');
  });
};

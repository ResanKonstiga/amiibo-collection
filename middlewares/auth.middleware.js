exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
  else {
    res.redirect('/auth/signin');
  }
};

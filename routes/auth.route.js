const router = require('express').Router();

const {
  SignUpRender, SignUp, SignInRender, SignOut, SignIn,
} = require('../controllers/auth.controller');

router.get('/signup', SignUpRender);
router.post('/signup', SignUp);
router.get('/signin', SignInRender);
router.post('/signin', SignIn);
router.get('/signout', SignOut);

module.exports = router;

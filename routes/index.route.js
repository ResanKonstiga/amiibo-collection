const router = require('express').Router();

const { IndexRender } = require('../controllers/index.controller');

router.get('/', IndexRender);

module.exports = router;

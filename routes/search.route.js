const router = require('express').Router();

const { SearchRender } = require('../controllers/search.controller');

router.get('/', SearchRender);

module.exports = router;

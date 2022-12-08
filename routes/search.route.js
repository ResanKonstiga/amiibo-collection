const router = require('express').Router();

const { SearchRender } = require('../controllers/search.controller');

// Открытие главной страницы
router.get('/', SearchRender);

module.exports = router;

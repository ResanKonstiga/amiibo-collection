const router = require('express').Router();

const { Index } = require('../controllers/index.controller');

// Открытие главной страницы
router.get('/', Index);

module.exports = router;

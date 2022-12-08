const router = require('express').Router();

const { SearchRender, AddToFavorite } = require('../controllers/search.controller');

router.get('/', SearchRender);
router.post('/', AddToFavorite);

module.exports = router;

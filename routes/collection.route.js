const router = require('express').Router();

const { isAuth } = require('../middlewares/auth.middleware');

const { CollectionRender, AddToCollection, DeleteFromCollection } = require('../controllers/collection.controller');

router.get('/', isAuth, CollectionRender);
router.post('/', isAuth, AddToCollection);
router.delete('/', isAuth, DeleteFromCollection);

module.exports = router;

const router = require('express').Router();

const { CollectionRender, AddToCollection, DeleteFromCollection } = require('../controllers/collection.controller');

router.get('/', CollectionRender);
router.post('/', AddToCollection);
router.delete('/', DeleteFromCollection);

module.exports = router;

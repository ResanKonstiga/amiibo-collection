const router = require('express').Router();

const { WishlistRender, DeleteFromWishList } = require('../controllers/wishlist.controller');

router.get('/', WishlistRender);
router.delete('/', DeleteFromWishList);

module.exports = router;

const router = require('express').Router();

const { WishlistRender, AddToWishlist, DeleteFromWishList } = require('../controllers/wishlist.controller');

router.get('/', WishlistRender);
router.post('/', AddToWishlist);
router.delete('/', DeleteFromWishList);

module.exports = router;

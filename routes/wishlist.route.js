const router = require('express').Router();

const { isAuth } = require('../middlewares/auth.middleware');

const { WishlistRender, AddToWishlist, DeleteFromWishList } = require('../controllers/wishlist.controller');

router.get('/', isAuth, WishlistRender);
router.post('/', isAuth, AddToWishlist);
router.delete('/', isAuth, DeleteFromWishList);

module.exports = router;

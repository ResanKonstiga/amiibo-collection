const render = require('../lib/renderTemplate');

const Wishlist = require('../views/Wishlist');

const { Favorite } = require('../db/models');

exports.WishlistRender = async (req, res) => {
  try {
    const user = req.session.user?.name;

    const amiibos = await Favorite.findAll({
      where: { userId: req.session.user.id },
      raw: true,
    });

    render(Wishlist, { user, amiibos }, res);
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteFromWishList = async (req, res) => {
  try {
    await Favorite.destroy({ where: { tail: req.body.amiiboId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

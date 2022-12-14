const render = require('../lib/renderTemplate');

const WishlistView = require('../views/Wishlist');

const { Wishlist } = require('../db/models');

exports.WishlistRender = async (req, res) => {
  try {
    const user = req.session.user?.name;

    const amiibos = await Wishlist.findAll({
      where: { userId: req.session.user.id },
      raw: true,
    });

    render(WishlistView, { user, amiibos }, res);
  } catch (error) {
    console.log(error);
  }
};

exports.AddToWishlist = async (req, res) => {
  try {
    await Wishlist.findOrCreate({
      where: {
        tail: req.body.tail,
      },
      defaults: {
        userId: req.session.user.id,
        amiiboSeries: req.body.amiiboSeries,
        character: req.body.character,
        gameSeries: req.body.gameSeries,
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        releaseAu: req.body.releaseAu,
        releaseEu: req.body.releaseEu,
        releaseJp: req.body.releaseJp,
        releaseNa: req.body.releaseNa,
        tail: req.body.tail,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteFromWishList = async (req, res) => {
  try {
    await Wishlist.destroy({ where: { tail: req.body.amiiboId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

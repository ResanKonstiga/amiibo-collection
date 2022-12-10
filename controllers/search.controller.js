const render = require('../lib/renderTemplate');

const Search = require('../views/Search');

const { Favorite } = require('../db/models');

exports.SearchRender = async (req, res) => {
  const user = req.session.user?.name;
  render(Search, { user }, res);
};

exports.AddToFavorite = async (req, res) => {
  try {
    await Favorite.findOrCreate({
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

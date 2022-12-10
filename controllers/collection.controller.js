const render = require('../lib/renderTemplate');

const CollectionView = require('../views/Collection');

const { Collection } = require('../db/models');

exports.CollectionRender = async (req, res) => {
  try {
    const user = req.session.user?.name;

    const amiibos = await Collection.findAll({
      where: { userId: req.session.user.id },
      raw: true,
    });

    render(CollectionView, { user, amiibos }, res);
  } catch (error) {
    console.log(error);
  }
};

exports.AddToCollection = async (req, res) => {
  try {
    await Collection.findOrCreate({
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

exports.DeleteFromCollection = async (req, res) => {
  try {
    console.log('Тут');
    await Collection.destroy({ where: { tail: req.body.amiiboId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

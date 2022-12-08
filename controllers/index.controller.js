const render = require('../lib/renderTemplate');

const Index = require('../views/Index');

exports.IndexRender = async (req, res) => {
  const user = req.session.user?.name;

  render(Index, { user }, res);
};

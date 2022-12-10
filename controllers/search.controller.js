const render = require('../lib/renderTemplate');

const Search = require('../views/Search');

exports.SearchRender = async (req, res) => {
  const user = req.session.user?.name;
  render(Search, { user }, res);
};

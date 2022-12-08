const render = require('../lib/renderTemplate');

const Index = require('../views/Index');

exports.Index = async (req, res) => {
  const user = req.session.user?.name;

  const response = await fetch('https://www.amiiboapi.com/api/amiibo');
  const amiiboList = await response.json();
  const amiiboListArr = amiiboList.amiibo;
  const randomAmiiboArr = [];

  for (let i = 0; i < 10; i += 1) {
    randomAmiiboArr.push(amiiboListArr[Math.floor(Math.random() * (amiiboListArr.length - 0) + 0)]);
  }

  render(Index, { user, randomAmiiboArr }, res);
};

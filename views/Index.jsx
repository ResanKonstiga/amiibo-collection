const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user }) {
  // console.log(randomAmiiboArr);
  return (
    <Layout user={user}>
      <div className="d-flex flex-column justify-content-center align-items-center cst-index-container">

        <div>
          <b>Welcome to amiibo Collection!</b>
        </div>

        <div>
          <img src="./images/title-image.png" alt="" />
        </div>

        <div>
          <p>On this site you can:</p>
          <div className="d-flex flex-column">
            <span>- Search amiibo</span>
            <span>- Add amiibo to wishlist</span>
            <span>- Add amiibo to collection</span>
          </div>
        </div>

      </div>
    </Layout>
  );
};

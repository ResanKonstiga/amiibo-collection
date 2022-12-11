const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-column justify-content-center align-items-center cst-index-container">

        <div className="cst-index-title">
          <b>Welcome to amiibo Collection!</b>
        </div>

        <div className="cst-inddex-info-block">
          <div className="cst-index-title-image">
            <img src="./images/title-image.png" alt="" />
          </div>

          <div className="cst-index-title-text">
            <p>On this site you can:</p>
            <div className="d-flex flex-column">
              <span>- Search amiibo</span>
              <span>- Add amiibo to wishlist</span>
              <span>- Add amiibo to collection</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

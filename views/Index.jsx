const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user, randomAmiiboArr }) {
  // console.log(randomAmiiboArr);
  return (
    <Layout user={user}>
      <div className="d-flex flex-wrap justify-content-center align-items-center" id="card-list">
        {randomAmiiboArr.map((amiibo) => (
          <div className="card d-flex justify-content-center align-items-center">
            <div className="cst-card-img-block d-flex justify-content-center align-items-center">
              <img src={amiibo.image} className="cst-card-img" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{amiibo.character}</h5>
              <h6 className="card-title">{amiibo.amiiboSeries}</h6>
              <h6 className="card-title">{amiibo.type}</h6>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}

      </div>
    </Layout>
  );
};

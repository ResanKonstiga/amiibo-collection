const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ user }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">

        {user ? (
          <div className="cst-container-search">

            <form id="advanced-search-form" role="search" data-auth="true">
              <input type="text" className="form-control cst-input-search" id="name-input" placeholder="Character name..." aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control cst-input-search" id="game-input" placeholder="Game series..." aria-label="Username" aria-describedby="basic-addon1" />
              <select className="form-select cst-input-search" id="type-select" aria-label="Default select example">
                <option selected>All</option>
                <option value="Figure">Figure</option>
                <option value="Card">Card</option>
                <option value="Band">Band</option>
              </select>

              <button type="submit" id="advanced-search-btn" className="btn btn-danger">Search</button>

            </form>

          </div>
        ) : (
          <div className="cst-container-search">

            <form id="advanced-search-form" role="search" data-auth="false">
              <input type="text" className="form-control cst-input-search" id="name-input" placeholder="Character name..." aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control cst-input-search" id="game-input" placeholder="Game series..." aria-label="Username" aria-describedby="basic-addon1" />
              <select className="form-select cst-input-search" id="type-select" aria-label="Default select example">
                <option selected>All</option>
                <option value="Figure">Figure</option>
                <option value="Card">Card</option>
                <option value="Band">Band</option>
              </select>

              <button type="submit" id="advanced-search-btn" className="btn btn-danger">Search</button>

            </form>

          </div>
        )}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog cst-modal-center">
            <div className="modal-content">

              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Name
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>

              <div className="modal-body d-flex">

                <div className="cst-modal-card-img-block">
                  <img className="cst-modal-card-img" id="modal-img" src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-000e0002.png" alt="" />
                </div>

                <div className="cst-modal-card-info-block">
                  <div>
                    <b>Amiibo Series: </b>
                    <span id="modal-amiibo-series" />
                  </div>
                  <div>
                    <b>Character: </b>
                    <span id="modal-character" />
                  </div>
                  <div>
                    <b>Game Series: </b>
                    <span id="modal-game-series" />
                  </div>
                  <div>
                    <b>Name: </b>
                    <span id="modal-name" />
                  </div>
                  <div>
                    <b>Type: </b>
                    <span id="modal-type" />
                  </div>
                  <br />
                  <div><b>Release date:</b></div>
                  <div>
                    <img className="cst-modal-flag-icon" src="./images/icons/au-flag.png" alt="" />
                    <b>AU:</b>
                    <span id="modal-release-au" />
                  </div>
                  <div>
                    <img className="cst-modal-flag-icon" src="./images/icons/eu-flag.png" alt="" />
                    <b>EU:</b>
                    <span id="modal-release-eu" />
                  </div>
                  <div>
                    <img className="cst-modal-flag-icon" src="./images/icons/jp-flag.png" alt="" />
                    <b>JP:</b>
                    <span id="modal-release-jp" />
                  </div>
                  <div>
                    <img className="cst-modal-flag-icon" src="./images/icons/na-flag.png" alt="" />
                    <b>NA:</b>
                    <span id="modal-release-na" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center text-center" id="card-list" />
      </div>
    </Layout>
  );
};

const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ user }) {
  return (
    <Layout user={user}>
      <div className="d-flex flex-wrap justify-content-center align-items-center">

        <div className="cst-container-search">
          <form id="advanced-search-form" role="search">
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

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Name
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex justify-content center">
                <div>
                  <img id="modal-img" src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-000e0002.png" alt="" />
                </div>
                <div>
                  <div id="modal-amiibo-series">Amiibo Series</div>
                  <div id="modal-character">Character</div>
                  <div id="modal-game-series">Game Series</div>
                  <div id="modal-name">Name</div>
                  <div id="modal-type">Type</div>
                  <br />
                  <div>Release date:</div>
                  <div id="modal-release-au">AU</div>
                  <div id="modal-release-eu">EU</div>
                  <div id="modal-release-jp">JP</div>
                  <div id="modal-release-na">NA</div>
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

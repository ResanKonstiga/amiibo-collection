const React = require('react');
const Layout = require('./Layout');

module.exports = function Search({ user }) {
  return (
    <Layout user={user}>
      <div>
        <form id="advanced-search-form" role="search">
          <input type="text" className="form-control" id="name-input" placeholder="Character name..." aria-label="Username" aria-describedby="basic-addon1" />
          <input type="text" className="form-control" id="game-input" placeholder="Game series..." aria-label="Username" aria-describedby="basic-addon1" />
          <select className="form-select" id="type-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="Figure">Figure</option>
            <option value="Card">Card</option>
          </select>
          <button type="submit" id="advanced-search-btn" className="btn btn-primary">Search</button>
        </form>

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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center" id="card-list" />
      </div>
    </Layout>
  );
};

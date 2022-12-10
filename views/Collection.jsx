const React = require('react');
const Layout = require('./Layout');

module.exports = function Collection({ user, amiibos }) {
  return (
    <Layout user={user}>
      <div>

        <div className="d-flex flex-wrap justify-content-center text-center" id="card-list">
          {amiibos.map((amiibo) => (

            <div className="card d-flex justify-content-center cst-card">

              <div className="cst-card-img-block d-flex justify-content-center align-items-center">
                <img src={amiibo.img} className="cst-card-img" alt="" />
              </div>

              <div className="card-body">
                <h5 className="card-title">{amiibo.character}</h5>
                <h6 className="card-title">{amiibo.amiiboSeries}</h6>

                <div className="d-flex flex-column">
                  <button type="button" className="btn btn-danger cst-card-btn" data-bs-toggle="modal" data-detail={amiibo.tail} data-bs-target="#exampleModal">
                    <img className="cst-btn-icon" src="./images/icons/info.png" alt="" data-detail={amiibo.tail} />
                    <span className="cst-btn-text" data-detail={amiibo.tail}>Details</span>
                  </button>

                  <button type="button" className="btn btn-danger cst-card-btn" data-deletecollection={amiibo.tail}>
                    <img className="cst-btn-icon" src="./images/icons/trash.png" alt="" data-deletecollection={amiibo.tail} />
                    <span className="cst-btn-text" data-deletecollection={amiibo.tail}>Delete</span>
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog cst-modal-center">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Name
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex justify-content center">
                <div className="cst-modal-card-img-block">
                  <img className="cst-modal-card-img" id="modal-img" src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-000e0002.png" alt="" />
                </div>
                <div className="cst-modal-body">
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

      </div>
    </Layout>
  );
};

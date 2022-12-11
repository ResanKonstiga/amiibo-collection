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

      </div>
    </Layout>
  );
};

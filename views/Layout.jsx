const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>amiibo Collection</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/index.css" />
        <script defer src="/js/application.js" />
      </head>
      <body>

        <header>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">amiibo Collection</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  {user ? (
                    <>
                      <a className="nav-link" href="/profile">{user}</a>
                      <a className="nav-link" href="auth/signout">SingOut</a>
                    </>
                  ) : (
                    <>
                      <a className="nav-link" href="auth/signup">SignUp</a>
                      <a className="nav-link" href="auth/signin">SignIn</a>
                    </>
                  )}
                </div>

                <form className="d-flex" id="search-form" role="search">
                  <input className="form-control me-2" id="input-search" type="search" placeholder="Search" aria-label="Search" required />
                  <button className="btn btn-outline-success" id="btn-search" type="submit">Search</button>
                </form>

                <div><a className="btn btn-outline-success" href="/search">Advanced Search</a></div>

              </div>
            </div>
          </nav>
        </header>

        <main className="cst-main d-flex justify-content-center align-items-center">
          {children}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
      </body>
    </html>
  );
};

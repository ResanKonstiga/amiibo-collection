const React = require('react');
const Layout = require('./Layout');

module.exports = function SignIn({ user, error }) {
  return (
    <Layout user={user}>
      <div className="cst-auth-form">
        <form action="/auth/signin" method="POST">

          {error
        && (
        <div>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
        )}

          <div className="input-group mb-3">
            <span className="input-group-text" id="addon-wrapping">📩</span>
            <input name="email" type="text" required className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="addon-wrapping">🔑</span>
            <input name="password" type="password" required className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>

          <div className="text-center">
            <button className="btn btn-danger" type="submit">Sign In</button>
          </div>

        </form>
      </div>
    </Layout>
  );
};

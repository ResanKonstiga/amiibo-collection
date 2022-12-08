const React = require('react');
const Layout = require('./Layout');

module.exports = function SignUp({ user }) {
  return (
    <Layout user={user}>
      <form action="/auth/signup" method="POST">

        <div className="input-group mb-3">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="email" type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="name" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input name="password" type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>

        <button className="btn btn-primary" type="submit">Sign Up</button>

      </form>
    </Layout>
  );
};

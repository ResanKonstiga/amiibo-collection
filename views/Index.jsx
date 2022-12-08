const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user }) {
  // console.log(randomAmiiboArr);
  return (
    <Layout user={user}>
      <div className="d-flex flex-wrap justify-content-center align-items-center" id="card-list" />
    </Layout>
  );
};

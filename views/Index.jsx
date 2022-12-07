const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user }) {
  return (
    <Layout user={user} />
  );
};

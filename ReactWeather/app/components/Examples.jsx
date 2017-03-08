var React = require('react');
var Nav = require('Nav');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Example Component</h2>
      </div>
    );
  }
});

module.exports = Examples;
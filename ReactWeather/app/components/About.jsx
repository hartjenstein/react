var React = require('react');
var Nav = require('Nav');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>About Component</h2>
      </div>
    );
  }
});

module.exports = About;
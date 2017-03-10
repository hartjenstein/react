let React = require('react');
let Nav = require('Nav');

let About = React.createClass({
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
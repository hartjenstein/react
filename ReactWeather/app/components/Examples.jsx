let React = require('react');
let Nav = require('Nav');

let Examples = React.createClass({
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
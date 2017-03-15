let React = require('react');
let Nav = require('Nav');
let { Link } = require('react-router');
// -----  STATELESS COMPONENT -------
// doesnt need rendering
let Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a view example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Phildelphia'>Philadelphia, PA</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
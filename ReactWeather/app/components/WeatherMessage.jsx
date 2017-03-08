var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
      let message = this.props.message;
      let city = this.props.city;
    return (
      <div>
          <p>{message} {city}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
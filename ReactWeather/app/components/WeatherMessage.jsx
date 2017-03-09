var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
      let { temp, location } = this.props;
    return (
      <div>
          <p>It is currently {temp} Degrees Celsius in  {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
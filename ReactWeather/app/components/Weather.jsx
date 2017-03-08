var React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
var Nav = require('Nav');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      city: 'your city',
      message: "It's currently Degrees in"
    };
  },
  getInitialState: function () {
    return {
        city: this.props.city,
        message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    let city = this.state.city;
    let message = this.state.message;
    return (
      <div>
        <h2>Weather Component</h2>
        <Nav/>
        <WeatherForm city={city} onNewData={this.handleNewData}/>
        <WeatherMessage message={message} city={city}/>
      </div>
    );
  }
});

module.exports = Weather;
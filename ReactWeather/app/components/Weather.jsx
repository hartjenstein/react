var React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
var Nav = require('Nav');

var Weather = React.createClass({

  // getInitiaState is built in to react so its getting called automatically 
  getInitialState: function () {
    return {
        location: 'Miami',
        temp: '32'
    };
  },
  handleNewData: function(location) {
   /*this.setState({
     location, 
     temp: 23
    });*/
  },
  render: function () {
    let { location, temp } = this.state;

    return (
      <div>
        <h2>Weather Component</h2>
        <Nav/>
        <WeatherForm onNewData={this.handleNewData}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = Weather;
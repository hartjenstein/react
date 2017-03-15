let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let Nav = require('Nav');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({

  // getInitiaState is built in to react so its getting called automatically 
  getInitialState: function () {
    return {
        isLoading: false
    };
  },
  handleNewData: function(location) {
  //  let that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then( (temp) => {
        this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  
  render: function () {
    let { isLoading, location, temp } = this.state;
    const renderMessage = () => {
      if(isLoading) { 
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onNewData={this.handleNewData}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
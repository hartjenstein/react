let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let Nav = require('Nav');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({

  // getInitiaState is built in to react so its getting called automatically 
  getInitialState: function () {
    return {
        isLoading: false,
    };
  },
  handleNewData: function(location) {
  
    let that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

  openWeatherMap.getTemp(location).then(function (temp) {
    that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
  }, function (e) {
    that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  
  render: function () {
    let { isLoading, location, temp, errorMessage } = this.state;

    let renderMessage = () => {
      if(isLoading) { 
        return <h3 className="text-centered">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };
    function renderError(){
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
  
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewData={this.handleNewData}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
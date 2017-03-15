let React = require('react');

let WeatherMessage = ({ temp, location }) => {
   
    return (
          <h3 className="text-centered">It is currently {temp} Degrees Celsius in {location}</h3>
    );
};

module.exports = WeatherMessage;
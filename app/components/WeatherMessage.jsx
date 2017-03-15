let React = require('react');

let WeatherMessage = ({ temp, location }) => {
   
    return (
      <div>
          <p>It is currently {temp} Degrees Celsius in {location}</p>
      </div>
    );
};

module.exports = WeatherMessage;
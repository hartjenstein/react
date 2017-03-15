let React = require('react');

// -----  STATELESS COMPONENT -------
// doesnt need rendering
let About = (props) => {
   return (
    <div>
      <h1 className="text-center">About</h1>
          <p> 
            This App is for demonstration purposes. It's using the React framework in combination with nodejs and foundation. You can query the current weather for a location.
          </p>    
              <a href="https://facebook.github.io/react">React by Facebook</a>
            <p>  
                The App is using the openweathermap API, which is freely available under:
            </p>
            <a href="https://openweathermap.org/">Openweathermap API</a>

    </div>
    );
};

module.exports = About;
let React = require('react');


let WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    let location = this.refs.location.value;
    // we varify below if the user acutally entered somethin valid before we get the location
    if (location.length > 0) {
      // this.refs.location.value pulls the value of the input box via ref
      this.refs.location.value = '';
      this.props.onNewData(location);
    }
},
render: function () {
    return (
      <div>
         <form onSubmit={this.onFormSubmit}>
    
             <input type="text" ref="location" placeholder="City Name"/>
             <button className="button expanded hollow">Get Weather</button>
         </form>
   
      </div>
    
    );
  }
});

module.exports = WeatherForm;
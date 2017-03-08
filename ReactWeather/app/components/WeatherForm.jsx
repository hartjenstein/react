let React = require('react');


let WeatherForm = React.createClass({
  onFormSubmit: function (e) {
  e.preventDefault();
  let updates = {};
  let city = this.refs.city.value;

  if (city.length > 0) {
      this.refs.city.value = '';
      updates.city = city;
  }
  this.props.onNewData(updates);
},
render: function () {
    return (
     <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="city" placeholder="City Name"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
     </form>
    );
  }
});

module.exports = WeatherForm;
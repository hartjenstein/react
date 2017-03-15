let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
    return (
      <div>
        <Nav/>
        <div className="row">
          {/*foundation responsive columns - small specifiying small sccreen layout 
          and large specifying the large screen layouts*/}
          <div className="medium-6 large-4 small-centered columns">
            {props.children}
          </div>
        </div>
      </div>
    );
};

module.exports = Main;

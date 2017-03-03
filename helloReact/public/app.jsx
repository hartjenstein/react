 let Greeter = React.createClass({
   // getDefaultProps Object
   getDefaultProps: function () {
     return {
        name: 'React'
     };
   },
   render: function () {
     let name = this.props.name;
     return (
       <div>
        <h1>Hello {name}!</h1>
        <p>This is from a component</p>
       </div>
     );
   }
 });
 
 ReactDOM.render(
        <Greeter name="Nick"/>,
        document.getElementById('app')
      );
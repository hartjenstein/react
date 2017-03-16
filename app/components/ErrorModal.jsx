let React = require('react');
let ReactDOM = require('react-dom');
let ReactDOMServer = require('react-dom/server');

let ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        let { title, message } = this.props;
        let modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                  <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                  </p>
            </div>
        );
        // jQuery selector is used to convert the modal markup to html
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // adding the jquery object to the component which contains the html we want to add to the DOM 
        //findDOMNode takes the component and returns the DOM node where the component lives
        //using jquerys html to pass in the html markup 
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {

        return (
            <div>
            </div>
        );
   
    }
});

module.exports = ErrorModal;
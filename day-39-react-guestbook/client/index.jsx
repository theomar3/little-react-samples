var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var Form = require('./js/form.jsx');
var Guestlist = require('./js/guestlist.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
          <Header />

          <Form />

          <Guestlist />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

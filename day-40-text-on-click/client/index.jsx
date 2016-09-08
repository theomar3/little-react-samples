var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;
var ChangeTextOnClick = require('./js/change-text-on-click.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

      <ChangeTextOnClick />
      </div>;
  }
}

render(<App/>, document.getElementById('app'));

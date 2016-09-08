var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var TheList = require('./js/the-list.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div className = 'container'>

        <Header />

        <TheList />

      </div>;
    );
  }
}

render(<App/>, document.getElementById('app'));

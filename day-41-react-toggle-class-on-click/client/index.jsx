var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var ToggleText = require('./js/toggle-text.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div className='container'>
        <Header />

        <ToggleText />

      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));

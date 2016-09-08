var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var TheList = require('./js/thelist.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <div = className="container">

          <Header />

          <TheList />
        </div>
      </div>



    );

  }
}

render(<App/>, document.getElementById('app'));

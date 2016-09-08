var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
var Incrementer = require('./js/incrementer.jsx');
// import PracticeIncrementer from '.js/practice-incrementer.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div className = '.container'>
        <Header />

        <Incrementer />

      </div>
    );

  }
}

render(<App/>, document.getElementById('app'));

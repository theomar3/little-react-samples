var React = require('react');
var render = require('render-dom').render;

require('./scss/practice-style.scss');

var PracticeHeader = require('./js/practice-header.jsx');
var PracticeChangeOnClick = require('./js/practice-change-text-onclick.jsx');


class App extends React.Component {

  render () {
    return (
      <div className = 'container'>
        <PracticeHeader />

        <PracticeChangeOnClick />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

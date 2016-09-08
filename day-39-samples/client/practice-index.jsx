var React = require('react');
var render = require('react-dom').render;

var PracticeHeader = requre('./js/practice-header.jsx');
var PracticeAnimeList = require('.js/practice-anime-list.jsx');

require('./scss/practice-style.scss');

class App extends React.Component {

  render () {
    return (
      <div className = 'container'>
        <Header />

        <PracticeAnimeList />


      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

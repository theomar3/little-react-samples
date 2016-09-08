var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
import PropsComponent from './js/props-component.jsx';
import MovieProps from './js/movie-props.jsx';
import List from './js/list.jsx';
import Character from './js/character.jsx';
import characterCreator from './js/characterCreator.js';

// console.log('character creator' , characterCreator());

var character1 = characterCreator();
var character2 = characterCreator();


require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />



        <PropsComponent text='this is a props component'/>
        <List count={5}/>
        <List />

        <Character dude={character1}/>
        <Character dude={character2}/>




      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

import React from 'react';
import store from './practice-clicker-store.js';


class Reset extends React.Component {


  _onClick() {
    store.actions.reset();
  }

  render() {

    return (
      <button onClick= {() => this._onClick()}> Click to reset clicker </button>
    );
  }
}

module.exports = Reset ;

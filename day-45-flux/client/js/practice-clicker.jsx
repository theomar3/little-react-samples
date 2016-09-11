import React from 'react';
import store from './clicker-store.js';

class PracticeClicker extends React.Component {

  constructor() {
    super();

    this.state = state.copyState();

    store.addListener( state => {
      this.setState(state);
    })
  }

  _onClick() {
    store.actions.increment();
  }

  render() {
    return (
      <div onClick = {() => this._onClick()}>
        Click me: {this.state.clickNumber}
      </div>
    );
  }
}

module.exports = PracticeClicker ;

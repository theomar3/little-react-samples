import React from 'react';
import store from './practice-clicker-store.js';


class IsEven extends React.Component {

  constructor() {
    super();

    this.state = store.copyState();

    store.addListener( state => {
      this.setState(state);
    })
  }




  render() {
    var evenValue = 'Yes';
    if(this.state.clickNumber %2 !== 0) {
      evenValue = 'No';
    }

    return (
      <div>
        Is the click number even? {evenValue}
      </div>
    );
  }
}

module.exports = IsEven ;

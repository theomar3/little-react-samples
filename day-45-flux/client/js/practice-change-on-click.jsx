import React from 'react';
import store from './practice-message-store.js';

class PracticeChangeOnClick extends React.Component {

  constructor() {
    super();

    this.state = {
      text: 'original text'
    }

    store.addListener(state => {
      this.setState({
        text: state.currentMessage
      })
    });
  }

  _onClick() {
    store.actions.changeMessage();
  }

  render() {
    return(
      <div onClick={() => this._onClick()}> {this.state.text}</div>
    );
  }
}

module.exports = PracticeChangeOnClick;

import React from 'react';

class PracticeChangeOnClick extends React.Component {

  constructor() {
    super();

    this.state = {
      text: 'original text'
    }
  }

  render() {
    return(
      <div> {this.state.text} </div>
    );
  }
}

module.exports = PracticeChangeOnClick;

import React from 'react';
import store from './messages-store.js';

function numberOfVowels(string) {
  var count = 0;
  var vowels = 'AEIUOaeiou';

  for (var i = 0; i < string.length; i++) {
    if(vowels.indexOf(string[i] > -1) {
      count += 1;
    }
  }
}


class PracticeVowelCount extends React.Component {

  constructor() {
    super();

    this.state = {
      vowelCount: 0
    }

    store.addListener(state => {
      this.setState({
        vowelCount: numberOfVowels(state.currentMessage)
      })
    });
  }

  render() {
    return(
      <div>
        Number of Vowels in the message: {this.state.vowelCount}
      </div>
    );
  }
}

module.exports = PracticeVowelCount;

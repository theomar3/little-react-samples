import React from 'react';
import store from './messages-store.js';

function countVowels(string) {
  var count = 0;

  var vowels = 'AEIUOaeiou';
  for(var i = 0; i < string.length; i++) {
    if(vowels.indexOf(string[i]) > -1) {
      count += 1;
    }
  }

  return count;
}

class VowelCount extends React.Component {

  constructor() {
    super();

    this.state = {
      vowelCount: 0
    }

    store.addListener(state => {
      this.setState({
        vowelCount: countVowels(state.currentMessage)
      })
    });
  }

  render() {
    return(
      <div>{this.state.vowelCount}</div>
    );
  }

}

module.exports = VowelCount;

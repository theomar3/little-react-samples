import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';
import ChangeOnClick from './js/change-on-click.jsx';
import VowelCount from './js/vowel-count.jsx';
import Clicker from './js/samples/clicker.jsx';
import IsEven from './js/isEven.jsx';
import Reset from './js/reset.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <Clicker />
        <IsEven />
        <Reset />

        <ChangeOnClick />
        <VowelCount />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

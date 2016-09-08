var React = require('react');

import PropsComponent from './props-component.jsx';


class Header extends React.Component {

  render () {

    return (
      <header>
        <h1>Props Practice</h1>

        <PropsComponent text=" This props component is in the Header" backgroundColor="blue" color='white' />
      </header>
    );
  }
}

module.exports = Header;

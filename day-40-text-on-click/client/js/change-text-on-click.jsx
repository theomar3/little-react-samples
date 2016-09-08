var React = require('react');

class ChangeTextOnClick extends React.Component {


  constructor() {
    super();
    this.state = {
      text: 'Click me',
    }
  }

  _clickMe() {
    this.setState( {
      text: 'You clicked me!',
      className: 'clicked-text'
    });
  }

  render() {
    var self = this;

    function clickText() {
      self._clickMe();
    }


    return (
      <p className={this.state.className} className='the-paragraph' onClick={clickText}>
        {this.state.text}
      </p>
    );

  }

}

module.exports = ChangeTextOnClick;

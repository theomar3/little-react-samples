var React = require('react');

class PracticeChangeOnClick extends React.Component {

  constructor() {
    super();

    this.state = {
      text: 'Click me',
    }
  }

  _clicked() {
    this.setState({
      text: 'You clicked me',
      className: 'clicked-text'
    })
  }

  render() {
    var that = this;

    function clickedFunction() {
      that._clicked();
    }
      return (
        <p className={this.state.className} onClick={clickedFunction}>{this.state.text}</p>
      );
    }
  }
}

module.exports = PracticeChangeOnClick;

var React = require('react');

class ToggleText extends React.Component {

  constructor() {
    super();

    this.state = {
      className: 'toggle-div'
    }
  }

  _clicked() {
    var className = this.state.className;

    if(className === 'toggle-div') {
      className = 'clicked-toggle-div';
    }
    else {
      className = 'toggle-div';
    }

    this.setState({
      className: className
    })
  }

  render() {
    var self = this;

    function divChanged() {
      self._clicked();
    }

    return (
      <div className={this.state.className} onClick={divChanged}>
        Click me to change me!
      </div>
    );
  }
}

module.exports = ToggleText;

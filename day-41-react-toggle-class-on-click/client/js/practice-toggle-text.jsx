var React = require('react');

class PracticeToggleText extends React.Component {

  constructor() {
    super();

    this.state = {
      className='toggle-div'
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
    var that = this;

    function divChanged() {
      that._clicked();
    }
    return(
      <div className='this.state.className' onClick={divChanged}>Click me</div>
    );
  }
}

module.exports = PracticeToggleText;

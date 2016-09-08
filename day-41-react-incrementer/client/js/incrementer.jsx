var React = require('react');

class Incrementer extends React.Component {

  constructor() {
    super();

    this.state = {
      number: 0
    }
  }

  _increase() {
    this.setState({
      this.state.number++;
    })
  }

  _decrease() {
    this.setState({
      this.state.number--;
    })
  }


  render() {
    var self = this;

    function increaseNumber() {
      self._increase();
    }

    function decreaseNumber() {
      self._decrease();
    }

    return(
      <div className='counter'>{this.state.number}</div>
      <button onClick={increaseNumber}>Up</button>
      <button onClick={decreaseNumber}>Down</button>
    );
  }
}

module.exports.Incrementer = Incrementer;

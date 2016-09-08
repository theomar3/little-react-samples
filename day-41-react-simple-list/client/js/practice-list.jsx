var React = require('react');

class PracticeList extends React.Component {

  constructor() {
    super();

    this.state = {
      groceryList = ['water', 'shrimp', 'bananas'];
    }
  }




  render() {

    function groceries(item, i) {
      <li key={i}>{item}</li>
    }

    return (
      <ul>{this.state.map(groceries)}</ul>
    );
  }
}

module.exports = PracticeList;

var React = require('react');

class TheList extends React.Component {

  constructor() {
    super();
    this.state = {
      groceryList: [
        'water bottles',
        'avocados',
        'walnuts',
        'fish'
      ];
    }
  }

  render() {

    function groceries(item, i) {
      <li key={i}>{item}</li>
    }

    return (
      <ul>
        {this.state.groceryList.map(groceries)}
      </ul>
    );

  }
}

module.exports = TheList;

var React = require('react');

class TheList extends React.Component{

constructor() {
  super();

  this.todoList = [
    {item: 1 task: 'Read book'},
    {item: 2 task: 'Write book'},
    {item: 3 task: 'Burn book'},
  ];
}

  render() {

    function toDoItems(item) {
      this.item.todoList;

    }

    return (
      <div>
        <input id="item-input"/>

        <ul id="list">
              <li>
                {this.toDoList.map(toDoItems)}
                <img class="delete-button" src="trash.svg"/>
              </li>
        </ul>
      </div>
    );

  }


}

module.exports = TheList;

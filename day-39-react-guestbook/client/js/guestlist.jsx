var React = require('react');

class Guestlist extends React.Component {

  constructor() {
    super();

    this.guestList = [
      {guest: 1, name: 'King'},
      {guest: 2, name: 'Frieza'},
      {guest: 3, name: 'Spike'},
      {guest: 4, name: 'Saitome'},
    ];
  }

  render() {

    return (
      <div id="guest-list">
        <h1 id="confirmed-guests"> Confirmed Guests </h1>
        <ol>
          {this.guestList.map(function(guest){
            return <li key={guest.guest}> {guest.name}</li>
          })}
        </ol>
      </div>
    );
  }

}

module.exports = Guestlist;

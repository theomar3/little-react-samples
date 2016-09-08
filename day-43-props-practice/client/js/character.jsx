import React from 'react';

class Character extends React.Component {

  render() {
    return(
      <div>
        <div>Name: {this.props.dude.name}</div>
        <div>HP: {this.props.dude.hitPoints} </div>
        <div>MP: {this.props.dude.magicPoints} </div>

      </div>

    );
  }
}


module.exports = Character;

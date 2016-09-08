import React from 'react';

class PracticeCharacter extends React.Component {

  render() {
    return(
      <div>
        <div>Name: this.props.dude.name </div>
        <div>HP: this.props.dude.hitPoints </div>

      </div>
    );
  }
}


module.exports = PracticeCharacter;

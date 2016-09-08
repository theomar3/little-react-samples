var React = require('react');

class AnimeList extends React.Component {

  constructor() {
    super();

    this.animeCharacters = [
      {id: 1, name: 'King Bradley'},
      {id: 2, name: 'Frieza'},
      {id: 3, name: 'Spike Spiegal'},
      {id: 4, name: 'Saitome'}
    ];
  }

  render() {

    function characterList(i) {
      return <li key={i.id}>{i.name}</li>
    }


    return <ul>
      {this.animeCharacters.map(characterList)}
    </ul>
  }



}

module.exports = AnimeList;

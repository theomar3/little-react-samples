var React = require('react');

class PracticeAnimeList extends React.Component {

  this.animeCharacters = [
    {character: 1, name:'King Bradley'},
    {character: 2, name:'Frieza'},
    {character: 3, name:'Spike'},
    {character: 4, name:'Saitome'},
  ];

  render () {

    function characterList(i) {
      return <li key={i.character}>{i.name}</li>
    }

    return (
      <ul>
        {this.animeCharacters.map(characterList)}
      </ul>
    );
  }
}

module.exports = PracticeAnimeList;

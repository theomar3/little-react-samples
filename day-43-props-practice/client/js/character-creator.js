var names = ['King Bradley', 'Scar', 'Mustang', 'Greed', 'Gluttony'];

function characterCreator() {
  var nameNumber = Math.floor(Math.random() * names.length);
  var hitPoints = Math.ceil(Math.random() * 10);
  var magicPoints = Math.ceil(Math.random() * 5);
  return {
    name: names[nameNumber],
    hitPoints: hitPoints,
    magicPoints: magicPoints
  };
}

module.exports = characterCreator;

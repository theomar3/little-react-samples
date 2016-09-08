var names = ['King Bradley', 'Scar', 'Mustang', 'Greed', 'Gluttony'];

function characterCreator() {
  var randomNames = Math.floor(Math.random() * names.length;
  var hitPoints = Math.ceil(Math.random() * 10);
  return {
    name: names[randomNames],
    hitPoints: hitPoints
  }
}

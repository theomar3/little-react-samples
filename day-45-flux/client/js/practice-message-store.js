var messages = [
    'I have been changed',
    'Stop clicking me',
    'Clicktastic!',
    'Your mouse feels good'
];

function getRandomMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

var state = {
  currentMessage : getRandomMessage()
}

var store = {
  listeners: [],
  actions: {}
}

store.addListener = function(listener) {
  store.listeners.push(listener);
}

store.copyState = function() {
  return {
    currentMessage : state.currentMessage
  }
}

function changed() {
  var copiedState = store.copyState();
  store.listeners.forEach(function(listener) {
    listener(copiedState);
  })
}


//actions //

store.actions.changeMessage = function() {
  state.currentMessage = getRandomMessage();
  changed();
}


module.exports = store;

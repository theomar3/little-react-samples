var state = {
  clickNumber : 0
}

var store = {
  listeners : [],
  actions: {}
}

store.addListener = function(listener) {
  store.listeners.push(listener);
}

store.copyState = function() {
  return {
    clickNumber: state.clickNumber
  }
}

function changed() {
  var copiedState = store.copyState();
  store.listeners.forEach(function(listener) {
    listener(copiedState);
  })
}


//Actions//

store.actions.increment = function() {
  state.clickNumber = state.clickNumber + 1;
  changed();
}

store.actions.reset = function() {
  state.clickNumber = 0;
  changed();
}


module.exports = store;

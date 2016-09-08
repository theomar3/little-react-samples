var React = require('react');

class Form extends React.Component {

  render() {
    return (

      <div id="form">
        <label>First Name: </label>
        <input></input>

        <label>Last Name: </label>
        <input></input>

        <button id="sign-in-button">Sign In</button>

      </div>
    );
  }


}

module.exports = Form;

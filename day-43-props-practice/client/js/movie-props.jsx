import React from 'react';

class MovieProps extends React.Component {

  render() {
    return(
      <div>
        <h1> {this.props.movieName} </h1>
        <h2> {this.props.genre} </h2>
      </div>
    );
  }
}

module.exports = MovieProps;

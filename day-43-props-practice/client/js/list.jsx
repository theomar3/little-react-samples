import React from 'react';

class List extends React.Component {



  render() {

    var list = [];

    for(var i = 1; i < this.props.count; i++) {
      list.push(<li key={i}>{i}</li>);
    }


    return(
    <ul> {list} </ul>

    );
  }
}

module.exports = List;

List.defaultProps = {count: 10};

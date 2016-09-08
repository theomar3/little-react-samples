import React from 'react';

class PropsComponent extends React.Component {

  render() {

    var style = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.color
    }


    // console.log(this.props);
    return(
      <div className="props-div" style={style} >
        {this.props.text}
      </div>
    );
  }
}

module.exports = PropsComponent;

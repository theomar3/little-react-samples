 import React from 'react';

 class PracticeIncrementer extends React.Component {

   constructor() {
     super();

     this.state = {
       number: 0
     }
   }

   _increase() {
     this.setState({
       this.state.number++;
     })
   }

   _decrease() {
     this.setState({
       this.state.number--;
     })
   }

   render() {
     var that = this;

     function increaseNumber() {
       that._increase();
     }

     function decreaseNumber() {
       that._decrease();
     }

     return(
       <div className='counter'>{this.state.number}</div>
       <button onClick={increaseNumber}>Up</button>
       <button onClick={decreaseNumber}>Down</button>
     );
   }
 }

 module.exports = PracticeIncrementer;

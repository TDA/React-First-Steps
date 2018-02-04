import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString()
    }
  }

  render () {
    return <div> Current time is {this.state.currentTime} </div>
  }
}

module.exports = {
  Clock: Clock
};
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    }
  }

  launchClock () {
    setInterval(function () {
      this.setState({
        currentTime: new Date().toLocaleString()
      })
    }.bind(this), 1000);
  }

  render () {
    return <div> Current time is {this.state.currentTime} </div>
  }
}

module.exports = {
  Clock: Clock
};
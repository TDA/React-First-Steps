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
    }.bind(this), 1000); // Alternative, we can also use the cool fat arrow
    // for auto-binding the `this` variable, like so:
    // () => { this.setState({currentTime: new Date().toLocaleString()}) }
    // I think this has pros and cons, but let's stick with the old way for now.
  }

  render () {
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime} />
        <DigitalDisplay time={this.state.currentTime} />
      </div>
    )
  }
}

const AnalogDisplay = (props) => <div>{props.time}</div>;
const DigitalDisplay = (props) => <div>{props.time}</div>;

module.exports = {
  Clock: Clock
};
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

const DigitalDisplay = (props) => <div>{props.time}</div>;

// For analog, lets do some fancy rotation stuff
const AnalogDisplay = function (props) {
  let date = new Date(props.time);
  let secondHandDegrees = date.getSeconds()/60 * 360;
  let minuteHandDegrees = date.getMinutes()/60 * 360;

  // Need dialstyle to be relative so we can absolutely position things inside it.
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: '40%',
    width: 200,
    height: 200,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'black'
  };

  return (
    <div>
      <div style={dialStyle}>
        {props.time}
      </div>
    </div>
  );
};

module.exports = {
  Clock: Clock
};
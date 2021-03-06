import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0
    }
  }

  launchClock () {
    setInterval(function () {
      let counter = ++this.state.counter;
      this.setState({
        counter: counter,
        currentTime: new Date().toLocaleString()
      })
    }.bind(this), 1000); // Alternative, we can also use the cool fat arrow
    // for auto-binding the `this` variable, like so:
    // () => { this.setState({currentTime: new Date().toLocaleString()}) }
    // I think this has pros and cons, but let's stick with the old way for now.
  }

  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this))
  }
  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this));
    fetch('')
      .then((response) => { console.log('cool componentDidMount', response); })
      .then(() => this.setState({currentTime: new Date().toLocaleString()}));
  }

  render () {
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime} />
        <DigitalDisplay time={this.state.currentTime} />
        {/*{this.state.counter > 1 ? (<div>Nothing</div>) : <Logger time={this.state.currentTime}/> }*/}
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
  let hourHandDegrees = date.getHours()/24 * 360;

  // Need dialstyle to be relative so we can absolutely position things inside it.
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: '40%',
    width: 200,
    height: 200,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'black',
    transform: 'rotate(-90deg)'
  };

  // While this makes perfect sense, i.e. having all styles related to a component inside the
  // component, it also *feels* wrong, probably because I have practiced separation of concerns
  // with JS and CSS for such a long time as a web dev, and now we are back to old ways.
  let secondHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '45%',
    height: '1px',
    transform: `rotate(${secondHandDegrees}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'red',
    zIndex: 5
  };

  let minuteHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid black',
    width: '45%',
    height: '3px',
    transform: `rotate(${minuteHandDegrees}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'black',
    zIndex: 3
  };

  let hourHandStyle = {
    position: 'absolute',
    top: 95,
    left: 100,
    border: '1px solid black',
    width: '35%',
    height: '4px',
    transform: `rotate(${hourHandDegrees}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'black',
    zIndex: 1
  };

  return (
    <div>
      <div style={dialStyle}>
        <div style={secondHandStyle} />
        <div style={minuteHandStyle} />
        <div style={hourHandStyle} />
      </div>
    </div>
  );
};

module.exports = {
  Clock: Clock
};
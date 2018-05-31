import React from 'react';
import ReactDOM from 'react-dom';

const HOC = (Component) => {
  class _HOC extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {label: 'Run'};
      this.handleClick = this.handleClick.bind(this);
    }

    getUrl() {
      return 'https://google.com';
    }

    handleClick(event) {
      console.log(event);
      document.getElementById('frame').src = this.getUrl();
    }

    render() {
      console.log(this.state);
      return <Component onClick={this.handleClick} {...this.state} {...this.props}/>
    }
  }

  _HOC.displayName = 'EnhancedComponent'; // Is what shows up in the React devtools.

  return _HOC;
};

class Button extends React.Component {
  render() {
    return <button {...this.props} className="btn btn-primary">{this.props.label}</button>
  }
}

class Link extends React.Component {
  render() {
    return <a {...this.props} href="#">{this.props.label}</a>
  }
}

class Logo extends React.Component {
  render() {
    return <img {...this.props} width="40" src="logo.png" href="#" alt={'logo'}/>
  }
}

module.exports = {
  EnhancedButton: HOC(Button),
  EnhancedLink: HOC(Link),
  EnhancedLogo: HOC(Logo)
};

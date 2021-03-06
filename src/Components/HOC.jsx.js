import React from 'react';

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

const Button = props => <button {...props} className="btn btn-primary">{props.label}</button>;

const Link = props => <a {...props} href="#">{props.label}</a>;

const Logo = props => <img {...props} width="40" src="logo.png" href="#" alt={'logo'}/>;

module.exports = {
  EnhancedButton: HOC(Button),
  EnhancedLink: HOC(Link),
  EnhancedLogo: HOC(Logo)
};

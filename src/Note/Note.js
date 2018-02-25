import React, { Component } from 'react';

class Note extends Component {
  confirmLeave(e) {
    console.log("Am i even called?");
    let confirmationMessage = 'Do you really want to close?';
    (e || window.event).returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+, IE, Edge
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  }
  componentDidMount() {
    console.log('Attaching confirmLeave event listener for beforeunload');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  componentWillUnmount() {
    console.log('Removing confirmLeave event listener for beforeunload');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  render() {
    console.log('Render');
    return (<div>
      Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)
    </div>
    )
  }
}

module.exports = {
  Note: Note
};

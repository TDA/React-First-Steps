/**
 * Created by schandramouli on 1/1/17.
 */
import React, { Component } from 'react';


const Events = React.createClass({
  handleClick: function () {
    alert('hello')
  },
  render: function () {
    return (
      <div onClick={this.handleClick}>Click me</div>
    )
  }
});

class EventsClassStyle extends Component {
  handleClick () {
    // this needs to be bound explicitly
    console.log(this); // is null when not bound
    // when bound, it looks like
    // <div onClick="bound handleClick()">Click me as well</div>
    // without bind, it looks like:
    // <div onClick="handleClick()">Click me as well</div>
    alert('hello')
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>Click me as well</div>
    )
  }
}


module.exports = {
  Events: Events,
  EventsClassStyle: EventsClassStyle
};
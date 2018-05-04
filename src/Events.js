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
      <button onClick={this.handleClick}>Click me</button>
    )
  }
});

class EventsClassStyle extends Component {
  handleClick () {
    // `this` needs to be bound explicitly for class style events
    console.log("asdfsafd");
    console.log(this); // is null when not bound
    // when bound, it looks like
    // <div onClick="bound handleClick()">Click me as well</div>
    // without bind, it looks like:
    // <div onClick="handleClick()">Click me as well</div>
    alert('hello')
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Click me as well</button>
    )
  }
}

var ChildComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
        <button onClick={this.props.clickHandler}>Do Magic</button>
      </div>
    );
  }
});

var ParentComponent = React.createClass({
  performMagic: function() {
    alert('TAADAH!');
  },

  render: function() {
    return (
      <div>
        <ChildComponent clickHandler={this.performMagic}/>
      </div>
    );
  }
});



module.exports = {
  Events: Events,
  EventsClassStyle: EventsClassStyle,
  ChildComponent: ChildComponent,
  ParentComponent: ParentComponent
};
import React from 'react';
const AnotherComponent = React.createClass({
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  render: function () {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>My message is : {this.props.message} </p>
        <ul>
          <li>This is also a component, you can either use the ES6 class style as before, or the regular JS object literal style.</li>
          <li>Lets try similar functionality as before</li>
          <li>The object literal style though, is react specific</li>
          <li>It does not require a constructor, instead, if you want to set default state, use getInitialState</li>
          <li>Also, more importantly, `this` keyword binding is done automatically if you use the createClass()</li>
          <li>Object literal supports mixins</li>
        </ul>
        <h4>This is my state: {JSON.stringify(this.state)}</h4>
      </div>
    )
  }
});

module.exports = {
  AnotherComponent: AnotherComponent
};

import React, { Component } from 'react';
// wish there was a way to get these pieces of code displayed on the page,
// without having to c/p them.
class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      message: props.message
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>My message is : {this.props.message} </p>
        <ul>
          <li>This is a component. Components can have properties set.</li>
          <li>Properties are set on a component just like html attributes, i.e. {'<tagname attrName="attrValue"></tagname>'}</li>
          <li>Properties can be accessed inside a component by using the props object.</li>
          <li>Only requirement for a component is that it should implement the render method (makes sense, otherwise how will it display?)</li>
          <li>(Also a pseudo requirement seems to be they need to be capitalized, i.e. Comp vs comp.)</li>
          <li>`this` keyword usage needs to be understood (usual JS)</li>
          <li>Class style doesnt support mixins</li>
        </ul>
        <p>Components can also have state, accessed similar to props: this.state</p>
        <h4>This is my state: {JSON.stringify(this.state)}</h4>
      </div>
    )
  }
}

module.exports = {
  ExampleComponent: ExampleComponent
};

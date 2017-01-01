import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Events, EventsClassStyle, ChildComponent, ParentComponent} from './Events'

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


class App extends Component {
  render() {
    var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>Basics of JSX</h2>
          <ul>
            <li>For strings use double quotes ""</li>
            <li>For anything other than strings (basically any variable), use braces {'{}'}</li>
            <li>To escape braces, use them as a string literal {'\'{}\''}</li>
            <li>Remember JavaScript keywords such as 'class' and 'for' need to be used differently: className, htmlFor, etc.</li>
            <li>Since JSX is XML (this is a guess, but I believe thats the explanation), there needs to be one root element in here</li>
            <li>Turns out I am right: 'Adjacent JSX elements must be wrapped in an enclosing tag'</li>
          </ul>
          <div>{ipsumText}</div>
          <button className="btn">Button</button>

          <h2>Basics of Components</h2>
          <ExampleComponent message="hello" name="component 1" />
          <AnotherComponent message="trello" name="component 2" />
          <Events />
          <EventsClassStyle />
          <ParentComponent />
        </div>
      </div>
    );
  }
}

export default App;

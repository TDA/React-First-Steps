import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ExampleComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>This is a component. Components can have properties set.</li>
          <li>Properties are set on a component just like html attributes, i.e. {'<tagname attrName="attrValue"></tagname>'}</li>
          <li>Properties can be accessed inside a component by using the props object.</li>
          <li>Another requirement for a component is that it should implement the render method (makes sense, otherwise how will it display?)</li>
        </ul>
      </div>
    )
  }
}

let AnotherComponent = React.createClass({
  render: function () {
    return(
      <div>
        This is also a component, you can either use the ES6 class style (), or the regular JS object literal style.
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
          <ExampleComponent />
          <AnotherComponent />
        </div>
      </div>
    );
  }
}

export default App;

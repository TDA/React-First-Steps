import React from 'react';

// Use the function syntax for stateless components (not the Class style, and
// don't confuse this with the React.createClass style.
const HelloWorld = function (props) {
  return <h1 {...props}>Hello {props.name}!!!</h1>
};

// Or even more concise: return/braces are not necessary with fat arrows
// const HelloWorldConcise = (props) => <h1 {...props}>Hello {props.name}!!!</h1>;
const HelloWorldConcise = (props) => { return <h1 {...props}>Hello {props.name}!!!</h1> };


module.exports = {
  HelloWorld: HelloWorld,
  HelloWorldConcise: HelloWorldConcise
};
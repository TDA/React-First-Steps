// Use the function syntax for stateless components (not the Class style, and
// don't confuse this with the React.createClass style.
const HelloWorld = function (props) {
  return <h1 {...props}>Hello {props.name}!!!</h1>
};
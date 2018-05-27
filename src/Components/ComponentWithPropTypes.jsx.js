import React from 'react';
import PropTypes from 'prop-types';

class ComponentWithPropTypes extends React.Component {
  render() {
    return <button className="btn" >{this.props.buttonLabel}</button>
  }
}
// These will throw warnings if they dont match.
ComponentWithPropTypes.propTypes = {
  buttonLabel: PropTypes.string, // optional
  handler: PropTypes.func.isRequired,
  // custom validator
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      // To implement custom validation, we need to create an expression that returns an instance of Error
      return new Error('Email validation failed!')
    }
  }
};

module.exports = {
  ComponentWithPropTypes: ComponentWithPropTypes
};

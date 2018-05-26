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
  handler: PropTypes.func.isRequired
};

module.exports = {
  ComponentWithPropTypes: ComponentWithPropTypes
};

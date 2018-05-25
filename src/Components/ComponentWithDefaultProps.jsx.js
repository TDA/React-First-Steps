import React from 'react';

class ComponentWithDefaultProps extends React.Component {
  render() {
    return <button className="btn" >{this.props.buttonLabel}</button>
  }
}
ComponentWithDefaultProps.defaultProps = {buttonLabel: 'Submit'};

module.exports = {
  ComponentWithDefaultProps: ComponentWithDefaultProps
};
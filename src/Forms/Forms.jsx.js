import React from 'react';

class StaticForm extends React.Component {
  render() {
    return <input type="text" name="title" value="Mr." />
  }
}

class DynamicForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: ""
    };
  }



  render() {
    return <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }
}

module.exports = {
  StaticForm: StaticForm,
  DynamicForm: DynamicForm
};
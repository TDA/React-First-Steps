import React from 'react';

class StaticForm extends React.Component {
  render() {
    return <input type="text" name="title" value="Mr." />
  }
}

module.exports = {
  StaticForm: StaticForm
};
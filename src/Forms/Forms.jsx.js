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
      title: "",
      jsStuff: {
        angular: false,
        react: false,
        polymer: false
      }
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleRadio(event) {
    let obj = {};  // erase other radios
    obj[event.target.value] = event.target.checked;

    this.setState({
      jsStuff: obj
    })
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title:</label><input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
        <br/>
        <radiogroup>
          <input type="radio" name="jsStuff" onChange={this.handleRadio} value='angular' id='angular' checked={this.state.jsStuff['angular']}/><label htmlFor='angular'>angular</label><br/>
          <input type="radio" name="jsStuff" onChange={this.handleRadio} value='react' id='react' checked={this.state.jsStuff['react']}/><label htmlFor='react'>react</label><br/>
          <input type="radio" name="jsStuff" onChange={this.handleRadio} value='vue' id='vue' checked={this.state.jsStuff['vue']}/><label htmlFor='vue'>vue</label>
        </radiogroup>
      </form>
    )
  }
}

module.exports = {
  StaticForm: StaticForm,
  DynamicForm: DynamicForm
};
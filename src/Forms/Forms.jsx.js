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
      },
      cssStuff: {
        css1: false,
        css2: false,
        css3: false
      }
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleRadio(event) {
    let obj = {};  // erase other radios
    obj[event.target.value] = event.target.checked;

    this.setState({
      jsStuff: obj
    })
  }

  handleCheckbox(event) {
    let obj = Object.assign(this.state.cssStuff);
    obj[event.target.value] = event.target.checked;

    this.setState({
      cssStuff: obj
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
        <br/>
        <checkboxgroup>
          <input type="checkbox" name="cssStuff" onChange={this.handleCheckbox} value='css1' id='css1' checked={this.state.cssStuff['css1']}/><label htmlFor='css1'>css1</label><br/>
          <input type="checkbox" name="cssStuff" onChange={this.handleCheckbox} value='css2' id='css2' checked={this.state.cssStuff['css2']}/><label htmlFor='css2'>css2</label><br/>
          <input type="checkbox" name="cssStuff" onChange={this.handleCheckbox} value='css3' id='css3' checked={this.state.cssStuff['css3']}/><label htmlFor='css3'>css3</label>
        </checkboxgroup>
      </form>
    )
  }
}

module.exports = {
  StaticForm: StaticForm,
  DynamicForm: DynamicForm
};
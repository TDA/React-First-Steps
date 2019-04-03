import React from 'react';
import ReactDOM from 'react-dom';

class StaticForm extends React.Component {
  render() {
    return <input type="text" name="title" value="Mr." />
  }
}

function DynamicFormFunctional(props) {
  // useEffect(effectFunction, listOfConditionalVariables);
  useEffect(() => {

  }, [variable1, variable2]);


  const [value, setValue] = useState('initialValue');
  const [value2, setValue2] = useState('initialValue2');
  const [state, setState] = useState({});

  const [state, dispatch] = useReducer(reducer, initialArg, init);

  const locale = useContext(MyContext);
  const theme = useContext(MyContext2);

  // Multiple contexts!!!
  function render() {
    return(<div>
      <div>{locale === 'US' ? displayA : displayB}</div>
      <div>{theme === 'black-theme' ? displayC : displayD}</div>
    </div>);
  }
}


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
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
      },
      additionalNotes: '',
      favoriteLanguage: 'ruby',
      favoriteFrameworks: ['meteor', 'react'] // needs to be an array
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  // The above is the same as below but uses fat arrows to bind
  // handleChange(name) {
  //   return function (event) {
  //     this.setState({ [name]: event.target.value });
  //   }.bind(this);
  // }

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

  handleMultiSelectChange(event) {
    let options = [...event.target.options]; // convert to array instead of nodelist so we can do filter
    let selectedOptions = options.filter(o => o.selected).map(o => o.value);
    console.log(selectedOptions);
    this.setState({favoriteFrameworks: selectedOptions})
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title:</label><input type="text" name="title" value={this.state.title} onChange={this.handleChange('title')} />
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

        <br/>
        <label htmlFor="desciption">Additional notes?</label><textarea name="description" value={this.state.additionalNotes} onChange={this.handleChange('additionalNotes')}/>
        <br/>

        <label htmlFor="selectField">Favorite language?</label>
        <select
          name="selectField"
          value={this.state.favoriteLanguage}
          onChange={this.handleChange('favoriteLanguage')}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>

        <br/>
        <label htmlFor="multiselect">Multiple favorite frameworks?</label>
        <select
          multiple={true} // usage of {} vs "" for boolean values, truthy vs falsy comes into play
          value={this.state.favoriteFrameworks}
          onChange={this.handleMultiSelectChange}
        >
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jQuery">jQuery</option>
          <option value="backbone">Backbone</option>
          <option value="ember">Ember</option>
        </select>
      </form>
    )
  }
}

class UncontrolledForms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {textbook: ''};
  }

  handleChange(event) {
    this.setState({textbook: event.target.value})
  }

  componentDidUpdate() {
    if (this.refs.uncontrolledInput)
      console.log(ReactDOM.findDOMNode(this.refs.uncontrolledInput).value);
  }

  componentDidMount() {
    if (this.refs.uncontrolledInput)
      console.log(ReactDOM.findDOMNode(this.refs.uncontrolledInput).value);
  }

  render() {
    return (
      <div>
        <input // The input value isnt handled by React, only the <span> tag is updated by React, so this is an uncontrolled input tag
          type="text"
          onChange={this.handleChange.bind(this)}
          placeholder="Eloquent TypeScript: Myth or Reality" />
        <br/>
        <span>{this.state.textbook}</span>
        <br/>

        <input type="text" // This uses refs instead of the event handlers, so this is also uncontrolled input tag
          // Refs are legacy/deprecated, so you really want to avoid this
          ref="uncontrolledInput"
          placeholder="some random text"
          defaultValue='lol?'
        />
        <span // this usage of refs inside render is also not a good practice, this is here just to show it can work, use it inside ComponentDidMount etc
        >
          { this.refs.uncontrolledInput ? ReactDOM.findDOMNode(this.refs.uncontrolledInput).value : '' }
        </span>
      </div>
    )
  }
}

module.exports = {
  StaticForm: StaticForm,
  DynamicForm: DynamicForm,
  UncontrolledForms: UncontrolledForms
};
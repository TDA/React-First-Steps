import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Events, EventsClassStyle, ParentComponent} from './Components/Events.jsx';
import {BoardSwitcher} from './State';
import {Clock} from './Clock/clock';
import {HelloWorldConcise, HelloWorld} from './Stateless Components/stateless';
import {Note} from './Note/Note';
import {ExampleComponent} from './Components/ExampleComponent.jsx';
import {AnotherComponent} from './Components/AnotherComponent.jsx';
import {CodeFetcher} from './Components/CodeFetcher.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteValue: ''
    };
    this.displayNote();
  }

  render() {
    let ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>Basics of JSX</h2>
          <ul>
            <li>For strings use double quotes ""</li>
            <li>For anything other than strings (basically any variable), use braces {'{}'}</li>
            <li>To escape braces, use them as a string literal {'\'{}\''}</li>
            <li>Remember JavaScript keywords such as 'class' and 'for' need to be used differently: className, htmlFor, etc.</li>
            <li>Since JSX is XML (this is a guess, but I believe that's the explanation), there needs to be one root element in here</li>
            <li>Turns out I am right: 'Adjacent JSX elements must be wrapped in an enclosing tag'</li>
          </ul>
          <div>{ipsumText}</div>
          <button className="btn">Button</button>

          <hr/>
          <h2>Basics of Components</h2>
          <ExampleComponent message="hello" name="component 1" />
          <CodeFetcher componentName={'ExampleComponent'} />
          <hr/>
          <AnotherComponent message="trello" name="component 2" />
          <CodeFetcher componentName={'AnotherComponent'} />
          <hr/>
          <Events />
          <CodeFetcher componentName={'Events'} />
          <hr/>
          <EventsClassStyle />
          <hr/>
          <ParentComponent />
          <hr/>
          <BoardSwitcher numBoards={3} />
        </div>

        <hr/>
        <div id="clock-content">
          <Clock />
        </div>
        <hr/>
        <div id="stateless-hello-world">
          <HelloWorld name={'Sai'}/>
        </div>
        <hr/>
        <div id="stateless-hello-world-concise">
          <HelloWorldConcise name={'Sai Pc'}/>
        </div>
        <hr/>
        <div className='Note'>
          {
            this.state.noteValue
          }
        </div>
      </div>
    );
  }

  displayNote() {
    let secondsLeft = 10;
    let returnValue = '';
    let interval = setInterval(() => {
      console.log(secondsLeft, "secondsleft");
      if (secondsLeft === 0) {
        clearInterval(interval);
        this.setState({
          noteValue: `Note was removed after ${10 - secondsLeft} seconds.`
        });
      } else {
        secondsLeft--;
        this.setState({
          noteValue: <Note secondsLeft={secondsLeft}/>
        });
      }
    }, 1000);
    console.log("Returning", returnValue);
    return returnValue;
  }
}

export default App;

import React from 'react';

class Mouse extends React.Component {
  render() {
    return (
      // So the order seems to be Capture -> Bubbling, just like regular JS events
      <div>
        <div
          style={{border: '1px solid red'}}
          onMouseOverCapture={this.getOnMouseOverCapture()} // These need to be executed since we RETURN a method closure,
          // usually you can skip the invocation and leave out the parantheses.
          onMouseOver={this.getOnMouseOver()} >
          Open DevTools and move your mouse cursor over here
        </div>
      </div>
    )
  }

  getOnMouseOver() {
    return this._getEvent('mouse over on bubbling event');
  }
  getOnMouseOverCapture() {
    return this._getEvent('mouse over on capture event');
  }

  _getEvent(eventText) {
    return ((event) => {
      console.log(eventText);
      console.log(event.currentTarget);
      console.log(event.target);
      console.log(event.nativeEvent);
    });
  }
}

module.exports = {
  Mouse: Mouse
};

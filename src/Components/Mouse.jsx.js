import React from 'react';

class Mouse extends React.Component {
  render() {
    return (
      // So the order seems to be Capture -> Bubbling, just like regular JS events
      <div>
        <div
          style={{border: '1px solid red'}}
          onMouseOverCapture={((event)=>{
            console.log('mouse over on capture event');
            console.dir(event, this)}).bind(this)}
          onMouseOver={((event)=>{
            console.log('mouse over on bubbling event');
            console.dir(event, this)}).bind(this)} >
          Open DevTools and move your mouse cursor over here
        </div>
      </div>
    )
  }
}

module.exports = {
  Mouse: Mouse
};

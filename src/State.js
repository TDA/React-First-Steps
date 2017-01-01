/**
 * Created by schandramouli on 1/1/17.
 */
import React from 'react';

var Board = React.createClass({
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
});

var BoardSwitcher = React.createClass({
  getInitialState: function() {
    return {
      selectedIndex: 0
    }
  },
  hClick: function() {
    console.log("Updating to ", this.state.selectedIndex + 1 % this.props.numBoards);
    this.setState({
      selectedIndex: ++this.state.selectedIndex % this.props.numBoards
    });
  },
  render: function() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.hClick}>Toggle</button>
      </div>
    );
  }
});


module.exports = {
  Board: Board,
  BoardSwitcher: BoardSwitcher
};
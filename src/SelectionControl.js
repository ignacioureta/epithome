import React, { Component } from 'react';

class SelectionControl extends Component {
  render() {
    return (
      <div className="selectionControls">
        <span role="img" aria-label="up arrow button" className="arrowButton">
          ⬆️
        </span>
        <span role="img" aria-label="down arrow button" className="arrowButton">
          ⬇️
        </span>
      </div>
    );
  }
}

export default SelectionControl;

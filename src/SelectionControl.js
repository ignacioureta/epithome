import React, { Component } from 'react';

class SelectionControl extends Component {
  render() {
    const { selectNext, selectPrevious } = this.props
    return (
      <div className="selectionControls">
        <div role="button" onClick={selectPrevious}>
          <span
            role="img"
            aria-label="up arrow button"
            className="arrowButton"
          >
            ⬆️
          </span>
        </div>
        <div role="button" onClick={selectNext}>
          <span
            role="img"
            aria-label="down arrow button"
            className="arrowButton"
          >
            ⬇️
          </span>
        </div>
      </div>
    );
  }
}

export default SelectionControl;

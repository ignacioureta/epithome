import React, { Component } from 'react';
import classNames from 'classnames'

import questions from './questions';

class QuestionList extends Component {
  state = {
    selectedItem: null,
  }

  handleSelect = (index) => {
    this.setState({
      selectedItem: index,
    })
  }

  render() {
    const { selectedItem } = this.state

    return (
      <ul className="questionList">
        {questions.map((question, idx) => (
          <li
            className="questionItem"
            key={question + idx}
            onClick={() => { this.handleSelect(idx) }}
          >
            <div className={classNames('questionNumber', { selectedItem: selectedItem === idx } )}>{idx + 1}</div>
            <div className="questionText">{question}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default QuestionList;

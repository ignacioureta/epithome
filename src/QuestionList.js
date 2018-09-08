import React, { Component } from 'react';
import classNames from 'classnames'

class QuestionList extends Component {
  render() {
    const { selectedItem, onClick, questions } = this.props

    return (
      <ul className="questionList">
        {questions.map((question, idx) => (
          <li
            className="questionItem"
            key={question + idx}
            onClick={() => { onClick(idx) }}
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

import React, { Component } from 'react';

import questions from './questions';

class QuestionList extends Component {
  render() {
    return (
      <ul className="questionList">
        {questions.map((question, idx) => (
          <li className="questionItem" key={question + idx}>
            <div className="questionNumber">{idx + 1}</div>
            <div className="questionText">{question}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default QuestionList;

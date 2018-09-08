import React, { Component } from 'react';
import classNames from 'classnames'

const isElementInViewport = (el) => {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

class QuestionList extends Component {
  selectedRef = (selectedItem) => {
    this.selectedItem = selectedItem
  }

  componentDidUpdate() {
    if (!isElementInViewport(this.selectedItem)) {
      this.selectedItem.scrollIntoView()
    }
  }

  render() {
    const { selectedItem, onClick, questions } = this.props

    return (
      <ul className="questionList">
        {questions.map((question, idx) => (
          <li
            className="questionItem"
            key={question + idx}
            onClick={() => { onClick(idx) }}
            ref={selectedItem === idx && this.selectedRef}
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

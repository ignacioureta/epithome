import React, { Component } from 'react';
import './App.css';

import QuestionList from './QuestionList';
import SelectionControl from './SelectionControl';

import questions from './questions';

class App extends Component {
  state = {
    selectedItem: null,
  }

  handleClick = (index) => {
    this.setState({
      selectedItem: index,
    })
  }

  selectPrevious = () => {
    this.setState(prevState => {
      const selectedItem = prevState.selectedItem - 1
      return { selectedItem: selectedItem < 0 ? 0 : selectedItem }
    })
  }

  selectNext = () => {
    this.setState(prevState => {
      const selectedItem = prevState.selectedItem + 1
      return { selectedItem: selectedItem === questions.length ? questions.length - 1 : selectedItem }
    })
  }

  render() {
    const { selectedItem } = this.state

    return (
      <div>
        <h1>Trivia!</h1>
        <div className="questionsContainer">
          <QuestionList
            onClick={this.handleClick}
            selectedItem={selectedItem}
            questions={questions}
          />
          <SelectionControl
            selectPrevious={this.selectPrevious}
            selectNext={this.selectNext}
          />
        </div>
      </div>
    );
  }
}

export default App;
